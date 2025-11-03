import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from '../assets/OSU_LOGO.png'
import Log from '../components/Log'
import PainLogList from '../components/PainLogList'


const PainLogPage = () => {
    const location = useLocation();
    const patient = location.state?.patient;
    console.log("Patient in PainLogPage:", patient);
    const logs = Object.entries(patient.Patient.Pain_log).map(([key, log]) => ({
        log: key,
        date: new Date(log.date).toLocaleDateString("en-US", { month: "numeric", day: "numeric" }),
        year: new Date(log.date).getFullYear().toString(),
        description: log.pain_type, // or use another field if you have one
        location: log.location,
        intensity: log.intensity,
    }));
    console.log("Logs: ", logs)

    const [selectedLog, setSelectedLog] = useState(logs[0]);
    const navigate = useNavigate()

    const handleClick = () => {
        console.log('Navigating to dashboard page');
        navigate("/dashboard")
    };



    return (
        <div className='min-w-fit'>
            <div className='flex flex-row overflow-x-auto'>
                <img src={logo} alt="OSU Logo" width={96} height={72} className='pt-10 ml-6 pb-6' />
                <h1 className='text-[32px] font-bold pl-4 pt-12'>TBT Care</h1>
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <button
                        type="button"
                        className="rounded-full bg-white py-3 px-10 ml-11 mb-2 text-s font-semibold text-black hover:bg-[#A00B29] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                        onClick={handleClick}
                    >
                        ← Back Home
                    </button>
                    <h1 className='text-2xl font-bold pb-6 ml-11'>Pain Report:</h1>
                </div>
            </div>

            {/* Dashboard Frame */}
            <div className="border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] rounded-[35px]
    mx-8 mt-6 p-10 h-[70vh] w-[calc(100vw-4rem)] overflow-hidden">
                <div className="flex flex-row gap-6 h-full">
                    <div className="w-[40%] h-full overflow-auto">
                        <PainLogList
                            logs={logs}
                            selectedLog={selectedLog}
                            onSelectLog={setSelectedLog}
                        />
                    </div>

                    <div className="flex-1 h-full overflow-y-auto overflow-x-hidden">
                        <Log log={selectedLog} />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default PainLogPage;