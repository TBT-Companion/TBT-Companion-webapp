import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/OSU_LOGO.png';
import Report from '../components/Report';
import ProgressReportList from '../components/ProgressReportList';

const ProgressReportPage = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [apiObject, setApiObject] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Navigating to dashboard page');
    navigate('/dashboard');
  };

  // Getting firebaseUid from local storage
  const uid = localStorage.getItem('firebaseUid');

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        // change the path to the server endpoint
        const response = await fetch('http://localhost:3000/images/'+uid); 
        const data = await response.json();
        setApiObject(data);

        //  Generate reports based on API response
        const reportsNew = data.images.slice(1).map((image, index) => {
          const dateObj = new Date('2025-09-28');
          dateObj.setDate(dateObj.getDate() + index * 7); // +1 to offset the skipped item
          const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
          const year = dateObj.getFullYear();

          return {
            week: index + 1, 
            date: formattedDate,
            year: String(year),
            description: image.description || '',
            img: image.url || '',
          };
        });


        setReports(reportsNew);
        setSelectedReport(reportsNew[0]); //  Set initial selected report
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchApiData();
  }, []);

  return (
    <div className='min-w-fit'>
      <div className='flex flex-row overflow-x-auto'>
        <img src={logo} alt='OSU Logo' width={96} height={72} className='pt-10 ml-6 pb-6' />
        <h1 className='text-[32px] font-bold pl-4 pt-12'>TBT Care</h1>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <button
            type='button'
            className='rounded-full bg-white py-3 ml-11 mb-2 text-s font-semibold text-black hover:bg-[#A00B29] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2'
            onClick={handleClick}
          >
            ← Back Home
          </button>
          <h1 className='text-2xl font-bold pb-6 ml-11'>Progress Report:</h1>
        </div>
      </div>

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
            {selectedReport && <Report report={selectedReport} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressReportPage;
