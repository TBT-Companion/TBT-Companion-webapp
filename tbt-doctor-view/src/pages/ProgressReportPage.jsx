import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/OSU_LOGO.png'
import Report from '../components/Report'
import ProgressReportList from '../components/ProgressReportList'


const ProgressReportPage = () => {
    const reports = [
        { 
            week: 1, 
            date: '9/28', 
            year: '2025', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: logo,
        },
        { week: 2, date: '10/5', year: '2025', description: 'Hello', img: ""},
        { week: 3, date: '10/12', year: '2025', description: 'Hello' },
        { week: 4, date: '10/19', year: '2025', description: 'Hello' },
        { week: 5, date: '10/26', year: '2025', description: 'Hello' },
        { week: 6, date: '11/2', year: '2025', description: 'Hello' },
        { week: 7, date: '11/9', year: '2025', description: 'Hello' },
        { week: 8, date: '11/16', year: '2025', description: 'Hello' },
    ];

    const [selectedReport, setSelectedReport] = useState(reports[0]);
    const navigate = useNavigate()

    const handleClick = () => {
        console.log('Navigating to dashboard page');
        navigate("/dashboard")
      };
  
  

  return (
    <div className='min-w-fit'>
        <div className='flex flex-row overflow-x-auto'>
            <img src={logo} alt="OSU Logo" width={96} height={72} className='pt-10 ml-6 pb-6'/>
            <h1 className='text-[32px] font-bold pl-4 pt-12'>TBT Care</h1>
    
        </div>
            
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
                <button
                    type="button"
                    className="rounded-full bg-white py-3  ml-11 mb-2 text-s font-semibold text-black hover:bg-[#A00B29] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                    onClick={handleClick}
                >
                    ← Back Home
                </button>
                <h1 className='text-2xl font-bold pb-6 ml-11'>Progress Report:</h1>
            </div>
        </div>
        
        
        {/* Dashboard Frame*/}
        <div className='border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] rounded-[35px] ml-11 mr-11 pt-10'>
            <div className='flex flex-row pb-6 max-h-[750px]'>
                <div className='ml-8 pr-4 overflow-auto w-full rounded-[28px]'>
                    <ProgressReportList 
                        reports={reports}
                        selectedReport={selectedReport}
                        onSelectReport={setSelectedReport}
                    />
                    
                </div>
                <div className='mr-8'>
                    <Report 
                        report={selectedReport}
                    />
                </div>
                
                
            </div>
        </div>
    </div>
    
  )
}

export default ProgressReportPage;
