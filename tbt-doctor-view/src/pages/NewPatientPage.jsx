import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/OSU_LOGO.png'
import PatientForm from '../components/PatientForm'
import { useLocation } from "react-router-dom";
import { ipAddress } from "../constants";



const NewPatientPage = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const patient = location.state?.patient;
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log("Selected patient:", patient);

  const handleClick = () => {
    //console.log('Navigating to dashboard page');

    navigate("/SelectPatient")
  };
  const handleClick1 = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);


    const form = document.querySelector("#patient-form");
    if (form) {
      form.requestSubmit();   // Triggers PatientForm’s handleSubmit → onSubmit(formData)
    } else {
      console.error("Form not found!");
    }
  };
  const handleSubmitForm = async (formData) => {
    try {
      // Combine patient info (from location.state) with form input data
      const dataToSend = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        ssnLast4: formData.ssnLast4,
        address: {
          line1: formData.address1,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
        },
        phone: formData.phone,
        displayName: patient.displayName,
        email: patient.email,
        firebaseUid: patient.firebaseUid,
        patientId: patient._id,
      };

      console.log("Submitting new patient:", dataToSend);

      // Send to your backend
      const token = localStorage.getItem("idToken"); // Firebase auth token, if used
      const response = await fetch(`http://${ipAddress}:3000/createPatient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "x-user-id": patient._id, // backend expects this header
        },
        body: JSON.stringify({
          // required fields (from the curl spec)
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: patient.email,
          phone_number: formData.phone,
          FirebaseUid: patient.firebaseUid,
          conversationID: "conv_002", // temporary placeholder, can be dynamic

          // safely ignored but stored for future use
          gender: formData.gender,
          dateOfBirth: formData.dateOfBirth,
          ssnLast4: formData.ssnLast4,
          address: {
            line1: formData.address1,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
          },
          displayName: patient.displayName,
          patientId: patient._id,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("✅ Patient created:", result);
      const doctorResponse = await fetch(`http://${ipAddress}:3000/api/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!doctorResponse.ok) {
        throw new Error(`Failed to fetch doctor info: ${doctorResponse.status}`);
      }

      const doctorData = await doctorResponse.json();
      //console.log("👨‍⚕️ Current doctor info:", doctorData);

      const doctorId = doctorData._id;
      //console.log("Doctor ID:", doctorId);

      try {
        const assignResponse = await fetch(`http://${ipAddress}:3000/api/users/assign-doctor`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            patientId: patient._id, // from the created patient
            doctorId: doctorId,    // from /api/users/me
          }),
        });

        if (!assignResponse.ok) {
          throw new Error(`Failed to assign doctor: ${assignResponse.status}`);
        }

        const assignResult = await assignResponse.json();
        console.log("✅ Doctor assigned to patient:", assignResult);
      } catch (assignError) {
        console.error("❌ Error assigning doctor:", assignError);
      }

      // Redirect after success
      navigate("/created");
    } catch (error) {
      console.error("❌ Error submitting patient:", error);
      alert("Failed to create patient record. Please try again.");
    }
  };


  return (
    <div className='min-w-fit'>
      <div className='flex flex-row overflow-x-auto'>
        <img src={logo} alt="OSU Logo" width={96} height={72} className='pt-10 ml-6 pb-6' />
        <h1 className='text-[32px] font-bold pl-4 pt-12'>TBT Care</h1>

      </div>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-col ml-11'>
          <button
            type="button"
            className="rounded-full bg-white py-3 mb-3 pl-11 pr-11 text-s font-semibold text-black hover:bg-[#A00B29] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={handleClick}
          >
            ← Back Home
          </button>

          <h1 className='text-2xl font-bold pb-6'>New Patient:</h1>
        </div>
      </div>


      {/* Dashboard Frame*/}
      <div className='border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] rounded-[35px] ml-11 mr-11 pt-10 mb-12'>
        <div className='flex flex-col pb-6 max-h-fit justify-center'>
          <div className='min-h-fit mr-8 ml-12 max-w-fit'>
            <PatientForm patient={patient} onSubmit={handleSubmitForm} />
          </div>
          <div className='w-fill text-end mr-10 rounded-[28px]'>
            <button
              type="button"
              onClick={handleClick1}
              disabled={isSubmitting}
              className={`rounded-full py-3 mb-8 mr-8 pl-10 pr-8 text-s font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2
    ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#BA0C2F] hover:bg-[#A00B29] hover:text-white"
                }`}
            >
              {isSubmitting ? "Submitting..." : "Submit →"}
            </button>

          </div>
        </div>
      </div>
    </div>

  )
}

export default NewPatientPage;
