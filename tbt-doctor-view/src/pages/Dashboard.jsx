import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import logo from "../assets/OSU_LOGO.png";
import DiagnosisSummary from "../components/DiagnosisSummary";
import PatientList from "../components/PatientList";
import PatientInfo from "../components/PatientInfo";
import Schedule from "../components/Schedule";
import PainLog from "../components/PainLog";
import ProgressReport from "../components/ProgressReport";
import PatientContact from "../components/PatientContact";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const name = "Collins";
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patients from backend
  const loadPatients = async () => {
    try {
      setLoading(true);
      const idToken = localStorage.getItem("idToken");
      //console.log("Using ID Token:", idToken);
      const response = await fetch("http://localhost:3000/api/users/patients", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }

      const data = await response.json();
      console.log("Fetched patients:", data);
      setPatients(data);
      setSelectedPatient(data[0] || null);
    } catch (err) {
      console.error("Error loading patients:", err);
      setError("Failed to load patients");
      setPatients([]);
      setSelectedPatient(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

const filteredPatients = patients.filter((patient) =>
  patient.displayName &&
  patient.displayName.toLowerCase().includes(searchQuery.toLowerCase())
);

  const handleClick = () => {
    console.log("Navigating to new patient page");
    navigate("/newPatient");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("idToken");
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="min-w-fit">
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

      <div className="flex flex-row justify-between ml-11 mr-6">
        <div className="flex flex-col">
          <h1 className="text-[18px]">Good Morning Dr. {name}</h1>
          <h1 className="text-2xl font-bold pb-6">Dashboard:</h1>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="rounded-full bg-[#BA0C2F] px-8 py-1 m-4 text-s font-semibold text-white shadow-xs hover:bg-[#A00B29] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
        >
          + Add Patient
        </button>
      </div>

      {/* Dashboard Frame */}
      <div className="border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] rounded-[35px] ml-11 mr-11 pt-10">
        <div className="ml-9 mr-8 pb-5">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {loading && (
          <div className="text-center text-gray-500 pb-4">Loading patients...</div>
        )}
        {error && (
          <div className="text-center text-red-500 pb-4">{error}</div>
        )}

        {!loading && !error && patients.length > 0 && (
          <div className="flex flex-row pt-5 pb-6">
            <div className="ml-8 pr-4 flex-1 overflow-auto max-h-[670px] rounded-[28px]">
              <PatientList
                patients={filteredPatients}
                selectedPatient={selectedPatient}
                onSelectPatient={setSelectedPatient}
              />
            </div>

            <div className="pr-6 flex flex-col">
              <div className="pl-8 pr-4 flex flex-row">
                <PatientContact />
                <div className="pl-6">
                  <PatientInfo patient={selectedPatient} />
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <div className="pl-8 pt-6">
                    <DiagnosisSummary />
                  </div>

                  <div className="flex flex-row pt-6 pl-8">
                    <Schedule />
                    <div className="pl-6">
                      <PainLog />
                    </div>
                  </div>
                </div>
                <div className="pt-6 pl-6">
                  <ProgressReport />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="rounded-full bg-gray-500 px-8 py-1 m-4 text-s font-semibold text-white shadow-xs hover:bg-gray-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
