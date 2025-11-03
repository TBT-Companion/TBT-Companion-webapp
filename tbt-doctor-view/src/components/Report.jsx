const Report = ({ report }) => {


  return (
    <div className="overflow-auto min-w-[1200px] min-h-full rounded-[28px] border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)]">
      <h2 className="pt-8 pl-8 text-[32px] font-bold text-black mb-4" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        Report {report?.week}
      </h2>

      <div className="pl-8 mb-4 w-[113px] text-[24px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Date: 
          <div className="font-light">{report?.date}/{report?.year}</div>
        </div>

      </div>

      <div className="pl-8 mb-4 w-fit text-[28px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Wound Image:</div>
        {report.img && report.img.trim() !== "" ? (
          <img
            src={report.img}
            alt="Wound"
            width={350}
            height={350}
            className="pt-5 pb-5"
          />
        ) : (
          <div className="text-[#BA0C2F]">No image on file</div>
        )}
      </div>

      <div className="pl-8 pb-8 w-fit text-[28px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Description:</div>
        <div className="font-extralight text-[24px]">{report?.description || ''}</div>
      </div>

    </div>
  );
};

export default Report;
