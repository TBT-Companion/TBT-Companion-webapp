import { useNavigate } from "react-router-dom";
import logo from '../assets/OSU_LOGO.png'
import PatientForm from '../components/PatientForm'

const PatientContactPage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log('Navigating to dashboard page');
    navigate("/")
  };
  
  return (
    <div className='min-w-fit'>
      <div className='flex flex-row overflow-x-auto'>
          <img src={logo} alt="OSU Logo" width={96} height={72} className='pt-10 ml-6 pb-6'/>
          <h1 className='text-[32px] font-bold pl-4 pt-12'>TBT Care</h1>
  
      </div>
          
      <div className='flex flex-row justify-between'>
          <div className='flex flex-col ml-11'>
              <button
                  type="button"
                  className="rounded-full bg-white py-3 mb-3 pl-11 pr-11 text-s font-semibold text-black hover:bg-[#A00B29] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                  onClick={handleClick}
              >
                  ← Back Home
              </button>
              
              <h1 className='text-2xl font-bold pb-6'>New Patient:</h1>
          </div>
      </div>
      
      
      {/* Dashboard Frame*/}
      <div className='border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] rounded-[35px] ml-11 mr-11 pt-10 mb-12'>
        <div className='flex flex-col pb-6 max-h-fit justify-center'>
          <div className='min-h-fit mr-8 ml-12 max-w-fit'>
            <PatientForm />
          </div>
          <div className='w-fill text-end mr-10 rounded-[28px]'>
            <button
                type="button"
                className="rounded-full bg-[#BA0C2F] py-3 mb-8 mr-8 pl-10 pr-8 text-s font-semibold text-white shadow-xs hover:bg-[#A00B29] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={handleClick}
            >
                Submit →
              </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default PatientContactPage;
