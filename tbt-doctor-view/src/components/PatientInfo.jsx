const PatientInfo = () => {
  return (
    <div className="patient-info-card relative w-[577px] h-[283px] shrink-0 rounded-[28px] border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)]">
      <h2 className="patient-info-title absolute left-[26px] top-[25px] text-[24px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 510 }}>
        Patient Information
      </h2>
      
      <div className="patient-first-name absolute left-[27px] top-[76px] w-[113px] text-[16px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">First Name:</div>
        Haresh
      </div>

      <div className="patient-last-name absolute left-[27px] top-[126px] w-[113px] text-[16px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Last Name:</div>
        Murugesan
      </div>

      <div className="patient-dob absolute left-[27px] top-[182px] w-[113px] text-[16px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Date Of Birth:</div>
        02/29/2004
      </div>

      <div className="patient-address absolute left-[263px] top-[76px] w-[227px] text-[16px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Address:</div>
        4600 International Gateway, Columbus OHIO 43219
      </div>

      <div className="patient-email absolute left-[263px] top-[152px] w-[223px] text-[16px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Email:</div> 
        murugesan.29@osu.edu
      </div>

      <div className="patient-phone absolute left-[263px] top-[206px] w-[137px] text-[16px] font-normal leading-normal text-black" style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}>
        <div className="font-bold">Phone Number:</div>
        (614) 943-9147
      </div>
    </div>
  );
};

export default PatientInfo;
