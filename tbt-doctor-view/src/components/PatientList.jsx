const PatientList = ({ patients, selectedPatient, onSelectPatient }) => {
  const defaultAvatar =
    "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76";

  return (
    <div className="pt-1 pl-1 pr-1 pb-1 grid grid-row-3 items-center min-w-[256px] gap-2.5 max-h-[626px]">
      {patients.map((patient) => {
        const key = patient._id || patient.id;
        const displayName = patient.displayName || patient.name || "Unnamed";

        return (
          <button
            key={key}
            onClick={() => onSelectPatient(patient)}
            className={`flex items-center max-w-screen h-[78px] rounded-full border border-[#D1D1D1] shadow-[inset_2px_2px_4px_0_rgba(0,0,0,0.10)] cursor-pointer transition-all text-left p-0 ${
              selectedPatient?._id === patient._id ||
              selectedPatient?.id === patient.id
                ? "bg-[#E5E5EA] shadow-[inset_2px_2px_4px_0_rgba(0,0,0,0.08)]"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-2 px-6 py-4">
              <div className="flex justify-start max-w-screen h-[38px]">
                <img
                  src={patient.avatar || defaultAvatar}
                  alt={displayName}
                  className="w-[38px] h-[38px] shrink-0 rounded-full"
                />
              </div>
              <div
                className="patient-name text-base font-normal leading-6 tracking-[0.15px] text-black truncate"
                style={{
                  fontFamily:
                    "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                {displayName}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default PatientList;
