const Log = ({ log }) => {
     
    return (
      <div className="relative overflow-auto min-w-[1200px] min-h-full rounded-[28px] border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)]">
            <h2 className="patient-info-title absolute left-[26px] top-[25px] text-[32px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 510 }}>
            Log {log?.log}
            </h2>
  
        <div className="patient-first-name absolute left-[27px] top-[76px] pt-1 w-[113px] text-[24px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
            <div className="font-bold">Date: 
                <div className="font-light">
                    {log?.date}/{log?.year}
                </div>
            </div>
          
        </div>
  
        <div className="patient-last-name absolute left-[27px] top-[150px] pt-5 w-fit text-[28px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
            <div className="font-bold">
                Pain Location: <p className="font-light inline">{log.location}</p>
            </div>
        </div>

        <div className="patient-last-name absolute left-[27px] top-[205px] pt-5 w-fit text-[28px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
            <div className="font-bold">
                Pain Intensity (Scale 1-10): <p className="font-light inline">{log.intensity}</p>
            </div>
        </div>

        <div className="patient-last-name absolute left-[27px] top-[250px] pt-8 pb-8 w-fit text-[28px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
            <div className="font-bold">Pain Description:</div>
            <div className="font-extralight text-[24px]">{log?.description || ''}</div>
        </div>
  
      </div>
    );
  };
  
  export default Log;
  