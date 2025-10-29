import { useNavigate } from "react-router-dom";
import logo from '../assets/OSU_LOGO.png'
import TextMessage from '../components/TextMessage'


const PatientContactPage = () => {
  const patient = {
    id: 1,
    name: "Haresh Murugesan",
    firstName: "Haresh",
    lastName: "Murugesan",
    dateOfBirth: "02/29/2004",
    address: "4600 International Gateway, Columbus OHIO 43219",
    email: "murugesan.29@osu.edu",
    phone: "(614) 943-9147",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/87060ebe5a867f4ddbec0e2971becae73cce88b5?width=76"
  }


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
              
              <h1 className='text-2xl font-bold pb-6'>Messages:</h1>
          </div>
      </div>
      
      
      {/* Dashboard Frame*/}
      <div className='border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] rounded-[35px] ml-11 mr-11 pt-10'>
        <div className='flex flex-col pb-6 max-h-fit'>
          <div className='w-fill text-center mx-8 rounded-[28px]'>
            <h1 className='text-[36px] font-bold'>{patient.name}</h1>
          </div>
          <div className='min-h-[600px] mr-8 ml-8 rounded-[28px] mt-4 mb-4'>

          </div>
          <div className='w-fill text-center mx-8 rounded-[28px]'>
            <TextMessage />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default PatientContactPage;
