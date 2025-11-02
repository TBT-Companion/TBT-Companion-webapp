import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "../assets/OSU_LOGO.png";

const SelectPatientPage = () => {

    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const token = localStorage.getItem("idToken");
                //console.log("Fetching unassigned patients with token:", token);
                const response = await fetch("http://localhost:3000/api/users/unassigned-patients", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                //console.log("Fetched unassigned patients:", data);


                setPatients(data);
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        };

        fetchPatients();
    }, []);

    const handleClick = () => {
        console.log("Navigating to dashboard page");
        navigate("/dashboard");
    };
    const handleConfirmSelection = () => {
        const patient = patients.find((p) => p._id === selectedPatient);
        //console.log("Selected patient:", patient);
        if (patient) {
            navigate("/newpatient", { state: { patient } });
        }
    };


    return (
        <div className="min-w-fit">
            {/* Header */}
            <div className="flex flex-row overflow-x-auto">
                <img
                    src={logo}
                    alt="OSU Logo"
                    width={96}
                    height={72}
                    className="pt-10 ml-6 pb-6"
                />
                <h1 className="text-[32px] font-bold pl-4 pt-12">TBT Care</h1>
            </div>

            {/* Back Button */}
            <div className="flex flex-row justify-between">
                <div className="flex flex-col ml-11">
                    <button
                        type="button"
                        className="rounded-full bg-white py-3 mb-3 pl-11 pr-11 text-s font-semibold text-black hover:bg-[#A00B29] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                        onClick={handleClick}
                    >
                        ← Back Home
                    </button>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold pb-6 text-center">
                Select Patient Account to Link Patient Data To:
            </h1>

            {/* Outer Box */}
            <div className="border border-[#D1D1D1] bg-white rounded-[35px] shadow-md mx-auto mt-4 p-8 max-w-md min-h-[700px] overflow-y-auto">

                {/* Inner grid of patient boxes */}
                <div className="flex flex-col gap-4 items-center">
                    {patients.map((patient) => (
                        <div
                            key={patient._id}
                            onClick={() => setSelectedPatient(patient._id)}
                            className={`border rounded-[20px] p-4 cursor-pointer min-w-full transition-all ${selectedPatient === patient._id
                                ? "bg-[#BA0C2F] text-white border-[#BA0C2F]"
                                : "border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            <h2 className="font-semibold text-lg">{patient.displayName}</h2>
                            <p className="text-sm">{patient.email}</p>
                        </div>
                    ))}
                </div>


            </div>
            <div className="flex justify-center mt-8 mb-12">
                <button
                    type="button"
                    disabled={!selectedPatient}
                    className={`rounded-full py-3 px-10 text-sm font-semibold shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 transition-all ${selectedPatient
                        ? "bg-[#BA0C2F] text-white hover:bg-[#A00B29]"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                        }`}
                    onClick={handleConfirmSelection}

                >
                    Confirm Selection →
                </button>

            </div>
        </div>
    );
};

export default SelectPatientPage;
