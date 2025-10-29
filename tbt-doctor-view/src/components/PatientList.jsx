const PatientList = ({ patients, selectedPatient, onSelectPatient }) => {
  const defaultAvatar = 'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76';

  return (
    <div className="pt-1 pl-1 pr-1 pb-1 grid grid-row-3 items-center min-w-[256px] gap-2.5 max-h-[626px]">
      {patients.map((patient) => (
        <button
          key={patient.id}
          onClick={() => onSelectPatient(patient)}
          className={`flex items-center max-w-screen h-[78px] rounded-full border border-[#D1D1D1] shadow-[inset_2px_2px_4px_0_rgba(0,0,0,0.10)] cursor-pointer transition-all text-left p-0 ${
            selectedPatient?.id === patient.id ? 'bg-[#E5E5EA] shadow-[inset_2px_2px_4px_0_rgba(0,0,0,0.08)]' : 'bg-white hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-2 px-6 py-4">
            <div className="flex justify-start max-w-screen h-[38px]">
              <img
                src={patient.avatar || defaultAvatar}
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

// const PatientList = ({ patients, selectedPatient, onSelectPatient }) => {
//   const defaultAvatar =
//     'https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76';

//   return (
//     <div className="pt-1 px-1 pb-1 patient-list-container flex flex-col items-center flex-1 min-w-0 w-full sm:w-[600px] md:w-[700px] lg:w-[810px] gap-2.5 max-h-[626px] overflow-y-auto">
//       {patients.map((patient) => (
//         <button
//           key={patient.id}
//           onClick={() => onSelectPatient(patient)}
//           className={`patient-card flex items-center w-full h-auto min-h-[64px] rounded-full border border-[#D1D1D1] shadow-[inset_2px_2px_4px_0_rgba(0,0,0,0.10)] cursor-pointer transition-all text-left ${
//             selectedPatient?.id === patient.id
//               ? 'bg-[#E5E5EA] shadow-[inset_2px_2px_4px_0_rgba(0,0,0,0.08)]'
//               : 'bg-white hover:bg-gray-50'
//           }`}
//         >
//           <div className="patient-content flex items-center gap-2 px-4 sm:px-6 py-4 w-full">
//             <div className="patient-avatar flex justify-center items-center w-[38px] h-[38px] shrink-0">
//               <img
//                 src={patient.avatar || defaultAvatar}
//                 alt=""
//                 className="w-[38px] h-[38px] shrink-0"
//               />
//             </div>
//             <div
//               className="patient-name text-base font-normal leading-6 tracking-[0.15px] text-black truncate"
//               style={{
//                 fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif',
//               }}
//             >
//               {patient.name}
//             </div>
//           </div>
//         </button>
//       ))}
//     </div>
//   );
// };

