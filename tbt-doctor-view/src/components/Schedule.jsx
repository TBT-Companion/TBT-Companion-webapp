const Schedule = () => {
  const handleClick = () => {
    console.log('Navigating to schedule page');
  };

  return (
    <button
      onClick={handleClick}
      className="schedule-widget relative w-[187px] h-[186px] shrink-0 rounded-[28px] border border-[#D1D1D1] bg-[#BA0C2F] shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] cursor-pointer hover:shadow-[0_6px_6px_0_rgba(0,0,0,0.15)] hover:bg-[#A00B29] transition-shadow text-left p-0"
    >
      <div className="visit-label absolute left-[26px] top-[24px] w-[127px] h-[25px] text-[26px] font-normal leading-normal text-white" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 510 }}>
        Next Visit
      </div>

      <div className="visit-date absolute left-[22px] top-[65px] w-[120px] h-[61px] text-[60px] font-normal leading-normal text-white" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 510 }}>
        11/4
      </div>

      <div className="visit-year absolute left-[26px] top-[141px] w-[51px] h-[19px] text-[18px] font-normal leading-normal text-white" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 510 }}>
        2025
      </div>
    </button>
  );
};

export default Schedule;
