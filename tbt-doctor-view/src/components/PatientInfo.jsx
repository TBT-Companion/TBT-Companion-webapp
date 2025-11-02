const PatientInfo = ({ patient }) => {
  const info = patient?.Patient || {}; // Access nested "Patient" object

  return (
    <div className="patient-info-card relative min-w-[577px] min-h-[283px] shrink-0 rounded-[28px] border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)]">
      <h2
        className="patient-info-title absolute left-[26px] top-[25px] text-[24px] font-normal leading-normal text-black"
        style={{
          fontFamily: "SF Pro, -apple-system, Roboto, Helvetica, sans-serif",
          fontWeight: 510,
        }}
      >
        Patient Information
      </h2>

      <div
        className="absolute left-[27px] top-[100px] w-[113px] text-[16px] leading-normal text-black"
        style={{
          fontFamily: "SF Pro, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        <div className="font-bold">First Name:</div>
        {info.first_name || ""}
      </div>

      <div
        className="absolute left-[27px] top-[150px] w-[113px] text-[16px] leading-normal text-black"
        style={{
          fontFamily: "SF Pro, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        <div className="font-bold">Last Name:</div>
        {info.last_name || ""}
      </div>

      {/* Email moved up */}

      {/* Phone Number moved up */}
      <div
        className="absolute left-[263px] top-[150px] w-[137px] text-[16px] leading-normal text-black"
        style={{
          fontFamily: "SF Pro, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        <div className="font-bold">Phone Number:</div>
        {info.phone_number || ""}
      </div>
    </div>
  );
};

export default PatientInfo;
