const ProgressReport = () => {
  const handleClick = () => {
    console.log('Navigating to progress report page');
  };

  return (
    <button
      onClick={handleClick}
      className="progress-report-card relative w-[455px] h-[309px] shrink-0 rounded-[28px] border border-[#D1D1D1] bg-[#BA0C2F] shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] cursor-pointer hover:shadow-[0_6px_6px_0_rgba(0,0,0,0.15)] hover:bg-[#A00B29] transition-shadow text-left p-0"
    >
      <h1 className="progress-report-title absolute left-[34px] top-[36px] w-[394px] h-[107px] shrink-0 text-[48px] font-normal leading-normal text-white" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        Progress Report
      </h1>

      <div className="view-report-link absolute left-[34px] top-[104px] w-[300px] h-[27px] shrink-0 text-[24px] font-normal leading-normal text-white" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        View Report →
      </div>
    </button>
  );
};

export default ProgressReport;
