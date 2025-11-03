const ProgressReportList = ({reports, selectedReport, onSelectReport}) => {

  return (
    <div className="grid grid-cols-2 gap-x-[22px] gap-y-[22px] min-w-[190px] pr-4">
      {reports.map((report) => {
        const isSelected = selectedReport.week === report.week;
        return (
          <button
            key={report.week}
            onClick={() => onSelectReport(report)}
            className={`relative w-full min-w-[187px] h-[186px] rounded-[28px] border border-[#D1D1D1] shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] cursor-pointer transition-all hover:shadow-[0_6px_6px_0_rgba(0,0,0,0.15)] ${
              isSelected
                ? 'bg-white hover:bg-gray-50'
                : 'bg-[#BA0C2F] hover:bg-[#A00B29]'
            }`}
          >
            <div
              className={`week-label absolute left-[26px] top-6 text-[26px] font-normal leading-normal ${
                isSelected ? 'text-[#BA0C2F]' : 'text-white'
              }`}
              style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Report {report.week}
            </div>

            <div
              className={`week-date absolute left-[22px] top-[65px] text-[60px] font-normal leading-normal ${
                isSelected ? 'text-[#BA0C2F]' : 'text-white'
              }`}
              style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              {report.date}
            </div>

            <div
              className={`week-year absolute left-[26px] top-[141px] text-[18px] font-normal leading-normal ${
                isSelected ? 'text-[#BA0C2F]' : 'text-white'
              }`}
              style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              {report.year}
            </div>

            <div
              className={`week-arrow absolute left-[119px] top-[135px] text-[28px] font-bold leading-normal ${
                isSelected ? 'text-[#BA0C2F]' : 'text-white'
              }`}
              style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              →
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ProgressReportList;
