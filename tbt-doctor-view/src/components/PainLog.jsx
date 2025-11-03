import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const PainLog = ({ patient }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log('Navigating to pain log page');
    navigate("/painlog", { state: { patient } });
  };
  const [logsArray, setLogsArray] = useState([]);

  useEffect(() => {
    if (patient?.Patient?.Pain_log) {
      const logs = Object.values(patient.Patient.Pain_log);
      setLogsArray(logs)
      console.log("Logs:", logsArray);
    }
  }, [patient]);

  const lastIndex = logsArray.length - 1;
  const lastLog = logsArray.length > 0 ? logsArray[lastIndex] : null;  
  console.log("Last Log: ", lastLog)
  const date = lastLog
    ? new Date(lastLog.date).toLocaleDateString("en-US", { month: "numeric", day: "numeric" })
    : null;
  const year = lastLog ? new Date(lastLog.date).getFullYear().toString() : null;

  return (
    <button
      onClick={handleClick}
      className="pain-log-widget relative w-[187px] h-[186px] shrink-0 rounded-[28px] border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] hover:bg-[#EFF1F2] cursor-pointer hover:shadow-[0_6px_6px_0_rgba(0,0,0,0.15)] transition-shadow text-left p-0"
    >
      <div className="pain-log-title absolute left-[26px] top-3.5 w-[140px] h-[90px] text-[26px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 510 }}>
        View Patient 
        <div>Pain Log →</div>
      </div>

      <div className="last-log-date absolute left-[26px] top-[132px] w-[138px] h-[31px] text-[14px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 510 }}>
        Last Log: 
        <div>
          {date}/{year}
        </div>
      </div>
    </button>
  );
};

export default PainLog;
