const Report = ({ report }) => {


  return (
    <div className="relative overflow-auto min-w-[1200px] min-h-full rounded-[28px] border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)]">
      <h2 className="patient-info-title absolute left-[26px] top-[25px] text-[32px] font-bold leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        Report {report?.week}
      </h2>

      <div className="patient-first-name absolute left-[27px] top-[76px] pt-1 w-[113px] text-[24px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-light">Date: {report?.date}/{report?.year}</div>

      </div>

      <div className="patient-last-name absolute left-[27px] top-[150px] pt-5 w-fit text-[28px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Wound Image:</div>
        {report.img && report.img.trim() !== "" ? (
          <img
            src={report.img}
            alt="Wound"
            width={250}
            height={250}
            className="rounded-[28px] border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] pt-5 pb-5"
          />
        ) : (
          <div className="text-[#BA0C2F]">No image on file</div>
        )}
      </div>

      <div className="patient-last-name absolute left-[27px] top-[426px] pt-8 pb-8 w-fit text-[28px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Description:</div>
        <div className="font-extralight text-[24px]">{report?.description || ''}</div>
      </div>

    </div>
  );
};

export default Report;
