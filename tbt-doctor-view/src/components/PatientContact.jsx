import { useNavigate } from "react-router-dom";

const PatientContact = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log('Navigating to patient contact page');
    navigate("/contact")
  };

  return (
    <button 
      onClick={handleClick}
      className="patient-contact-widget relative w-[280px] h-[280px] shrink-0 rounded-[28px] bg-[#BA0C2F] shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] cursor-pointer border-0 p-0 hover:bg-[#A00B29] transition-colors"
      >
      <div className="message-text absolute left-[39px] top-[46px] w-[201px] shrink-0 text-white text-left" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="text-[48px] font-normal leading-[52px]">Message</div>
        <div className="text-[48px] font-normal leading-[52px]">Patient</div>
        <div className="text-[44px] font-normal leading-11 mt-2.5">→</div>
      </div>
    </button>
  );
};

export default PatientContact;
