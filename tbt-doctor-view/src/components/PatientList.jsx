import { useState } from 'react';

const PatientList = () => {
  const patients = [
    { id: 1, name: 'Haresh Murugesan', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76' },
    { id: 2, name: 'Stevie Rajesh', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76' },
    { id: 3, name: 'Raghav Jagan', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76' },
    { id: 4, name: 'Srinivas Sankaranarayanan', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76' },
    { id: 5, name: 'Meera Selvakumar', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76' },
    { id: 6, name: 'Meenakshi Varadarajan', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76' },
    { id: 7, name: 'Srinija Konduru', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76' },
    { id: 8, name: 'Shrinidhi Nagappan', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76' },
  ];

  const [selectedPatientId, setSelectedPatientId] = useState(1);

  const handlePatientClick = (patientId) => {
    setSelectedPatientId(patientId);
  };

  return (
    <div className="patient-list-container flex flex-col items-center w-[421px] gap-[10px] max-h-[602px] overflow-y-auto">
      {patients.map((patient) => (
        <button
          key={patient.id}
          onClick={() => handlePatientClick(patient.id)}
          className={`patient-card flex items-center w-full h-[66px] rounded-full border border-[#D1D1D1] shadow-[inset_2px_2px_4px_0_rgba(0,0,0,0.10)] cursor-pointer transition-all text-left p-0 ${
            selectedPatientId === patient.id ? 'bg-[#E5E5EA] shadow-[inset_2px_2px_4px_0_rgba(0,0,0,0.08)]' : 'bg-white hover:bg-gray-50'
          }`}
        >
          <div className="patient-content flex items-center gap-2 px-6 py-4">
            <div className="patient-avatar flex justify-center items-center w-[38px] h-[38px] shrink-0">
              <img
                src={patient.avatar}
                alt=""
                className="w-[38px] h-[38px] shrink-0"
              />
            </div>
            <div
              className="patient-name text-base font-normal leading-6 tracking-[0.15px] text-black"
              style={{ fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              {patient.name}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PatientList;
