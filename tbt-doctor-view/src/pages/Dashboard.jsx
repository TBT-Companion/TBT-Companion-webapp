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
import { ipAddress } from "../constants";



const Dashboard = () => {

    const navigate = useNavigate();
    const [doctor, setDoctor] = useState(null)
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [patientDetails, setPatientDetails] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleOpenPainLogPage = () => {
        if (patientDetails) {
            navigate("/painlog", { state: { patient: patientDetails } });
        } else {
            console.warn("No patient details loaded yet");
        }
    };
    const handleOpenProgressReportPage = () => {
        if (patientDetails) {
            console.log("Patient details in Dashboard:", patientDetails);
            navigate("/report", { state: { patient: patientDetails } });
        } else {
            console.warn("No patient details loaded yet");
        }
    };
    const handleOpenMessagePage = () => {
        if (patientDetails) {
            navigate("/contact", { state: { patient: patientDetails } });
        } else {
            console.warn("No patient details loaded yet");
        }
    };

    const loadDoctor = async () => {
        try {
            setLoading(true);
            const idToken = localStorage.getItem("idToken");
            const response = await fetch(`http://${ipAddress}:3000/api/users/me`, {
                headers: {
                    Authorization: `Bearer ${idToken}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch doctor");
            }

            const data = await response.json();

            setDoctor(data);
            console.log(data)
        } catch (error) {
            console.error("Error loading patients:", error);
            setDoctor(null)
        } finally {
            setLoading(false)
        }
    }

    // ✅ Fetch patient list
    const loadPatients = async () => {
        try {
            setLoading(true);
            const idToken = localStorage.getItem("idToken");
            const response = await fetch(`http://${ipAddress}:3000/api/users/patients`, {
                headers: {
                    Authorization: `Bearer ${idToken}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch patients");
            }

            const data = await response.json();
            //console.log("Fetched patients:", data);

            const uid = data[0].firebaseUid || data[0].FirebaseUid;
            setPatients(data);
            if (data.length > 0) {
                setSelectedPatient(data[0]);
                if (data[0].firebaseUid || data[0].FirebaseUid) {
                    await loadPatientDetails(data[0].firebaseUid || data[0].FirebaseUid);
                }
            }
            //Setting local storage firebaseUid for other pages to use
            localStorage.setItem("firebaseUid", uid);
        } catch (err) {
            console.error("Error loading patients:", err);
            setError("Failed to load patients");
            setPatients([]);
            setSelectedPatient(null);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Fetch full patient details by Firebase UID
    const loadPatientDetails = async (firebaseUid) => {
        try {
            if (!firebaseUid) {
                console.warn("No Firebase UID provided for patient details fetch");
                return;
            }

            const idToken = localStorage.getItem("idToken");
            const response = await fetch(
                `http://${ipAddress}:3000/patient/firebase/${firebaseUid}`,
                {
                    headers: { Authorization: `Bearer ${idToken}` },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch patient details");
            }

            const data = await response.json();
            console.log("Patient details:", data);
            setPatientDetails(data);
        } catch (error) {
            console.error("Error loading patient details:", error);
            setPatientDetails(null);
        }
    };

    //✅ Load patients on mount
    useEffect(() => {
        loadPatients();
    }, []);

    useEffect(() => {
        loadDoctor();
    }, [])


    // ✅ Filter patient list by displayName or name fields
    const filteredPatients = patients.filter((patient) => {
        const name =
            patient.displayName ||
            `${patient.first_name || ""} ${patient.last_name || ""}`.trim();
        return name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleClick = () => {
        console.log("Navigating to new patient page");
        navigate("/SelectPatient");
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

    if (!doctor) {
        return <p>Loading Dashboard...</p>;
    }

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

            <div className="flex flex-row justify-between ml-11 mr-6">
                <div className="flex flex-col">
                    <h1 className="text-[18px]">Good Morning Dr. {doctor.displayName}</h1>
                    <h1 className="text-2xl font-bold pb-6">Dashboard:</h1>
                </div>

                <button
                    type="button"
                    onClick={handleClick}
                    className="rounded-full bg-[#BA0C2F] px-8 py-1 m-4 text-s font-semibold text-white shadow-xs hover:bg-[#A00B29]"
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
                    <div className="text-center text-gray-500 pb-4">
                        Loading patients...
                    </div>
                )}
                {error && <div className="text-center text-red-500 pb-4">{error}</div>}

                {!loading && !error && patients.length > 0 && (
                    <div className="flex flex-row pt-5 pb-6">
                        <div className="ml-8 pr-4 flex-1 overflow-auto max-h-[670px] rounded-[28px]">
                            <PatientList
                                patients={filteredPatients}
                                selectedPatient={selectedPatient}
                                onSelectPatient={(patient) => {
                                    setSelectedPatient(patient);
                                    const uid = patient.firebaseUid || patient.FirebaseUid;
                                    if (uid) loadPatientDetails(uid);
                                }}
                            />
                        </div>

                        <div className="pr-6 flex flex-col">
                            <div className="pl-8 pr-4 flex flex-row">
                                <PatientContact patient={patientDetails} onOpenPage={handleOpenMessagePage} />
                                <div className="pl-6">
                                    <PatientInfo patient={patientDetails} />
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
                                            <PainLog patient={patientDetails} onOpenPage={handleOpenPainLogPage} />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 pl-6">
                                    <ProgressReport patient={patientDetails} onOpenPage={handleOpenProgressReportPage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full bg-gray-500 px-8 py-1 m-4 text-s font-semibold text-white shadow-xs hover:bg-gray-600"
                >
                    Logout
                </button>
            </div>

        </div>
    );
};

export default Dashboard;
