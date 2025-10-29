import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/OSU_LOGO.png'
import DiagnosisSummary from '../components/DiagnosisSummary'
import PatientList from '../components/PatientList'
import PatientInfo from '../components/PatientInfo'
import Schedule from '../components/Schedule'
import PainLog from '../components/PainLog'
import ProgressReport from '../components/ProgressReport'
import PatientContact from '../components/PatientContact'
import SearchBar from '../components/SearchBar'



const Dashboard = () => {
  const name = "Collins"
  const mockPatients = [
    {
      id: 1,
      name: "Haresh Murugesan",
      firstName: "Haresh",
      lastName: "Murugesan",
      dateOfBirth: "02/29/2004",
      address: "4600 International Gateway, Columbus OHIO 43219",
      email: "murugesan.29@osu.edu",
      phone: "(614) 943-9147",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76"
    },
    { id: 2, name: "Stevie Rajesh", firstName: "Stevie", lastName: "Rajesh", dateOfBirth: "05/15/1998", address: "", email: "", phone: "", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76" },
    { id: 3, name: "Raghav Jagan", firstName: "Raghav", lastName: "Jagan", dateOfBirth: "03/22/2001", address: "", email: "", phone: "", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76" },
    { id: 4, name: "Srinivas Sankaranarayanan", firstName: "Srinivas", lastName: "Sankaranarayanan", dateOfBirth: "07/10/1995", address: "", email: "", phone: "", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76" },
    { id: 5, name: "Meera Selvakumar", firstName: "Meera", lastName: "Selvakumar", dateOfBirth: "11/03/2000", address: "", email: "", phone: "", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76" },
    { id: 6, name: "Meenakshi Varadarajan", firstName: "Meenakshi", lastName: "Varadarajan", dateOfBirth: "09/28/1999", address: "", email: "", phone: "", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76" },
    { id: 7, name: "Srinija Konduru", firstName: "Srinija", lastName: "Konduru", dateOfBirth: "12/14/2002", address: "", email: "", phone: "", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76" },
    { id: 8, name: "Shrinidhi Naggapan", firstName: "Srinija", lastName: "Konduru", dateOfBirth: "12/14/2002", address: "", email: "", phone: "", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76" },
  ];
  
  const [selectedPatient, setSelectedPatient] = useState(mockPatients[0]);
  const [searchQuery, setSearchQuery] = useState("")
  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate()
  const handleClick = () => {
    console.log('Navigating to new patient page');
    navigate("/newPatient")
  };

  return (
    <div className='min-w-fit'>
        <div className='flex flex-row overflow-x-auto'>
            <img src={logo} alt="OSU Logo" width={96} height={72} className='pt-10 ml-6 pb-6'/>
            <h1 className='text-[32px] font-bold pl-4 pt-12'>TBT Care</h1>
    
        </div>
            
        <div className='flex flex-row justify-between ml-11 mr-6'>
            <div className='flex flex-col'>
                <h1 className='text-[18px]'>Good Morning Dr. {name}</h1>
                <h1 className='text-2xl font-bold pb-6'>Dashboard:</h1>
            </div>
            
            <button
                type="button"
                onClick={handleClick}
                className="rounded-full bg-[#BA0C2F] px-8 py-1 m-4 text-s font-semibold text-white shadow-xs hover:bg-[#A00B29] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
                + Add Patient
            </button>
            
        </div>
        
        
        {/* Dashboard Frame*/}
        <div className='border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] rounded-[35px] ml-11 mr-11 pt-10'>
            <div className='ml-9 mr-8 pb-5'>
                <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            
            
            <div className='flex flex-row pt-5 pb-6'>
                <div className='ml-8 pr-4 flex-1 overflow-auto max-h-[670px] rounded-[28px]'>
                    <PatientList
                        patients={filteredPatients}
                        selectedPatient={selectedPatient}
                        onSelectPatient={setSelectedPatient}
                    />
                </div>
                
                <div className='pr-6 flex flex-col'>
                    <div className='pl-8 pr-4 flex flex-row'>
                        <PatientContact></PatientContact>
                        <div className='pl-6'>
                            <PatientInfo patient={selectedPatient} />
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <div>
                            <div className='pl-8 pt-6'>
                                <DiagnosisSummary></DiagnosisSummary>
                            </div>

                            <div className='flex flex-row pt-6 pl-8'>
                                <Schedule></Schedule>
                                <div className='pl-6'>
                                    <PainLog></PainLog>
                                </div>
                            </div>
                        </div>
                        <div className='pt-6 pl-6'>
                            <ProgressReport></ProgressReport>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
