import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProgressReportPage from './pages/ProgressReportPage';
import PatientContactPage from './pages/PatientContactPage';
import NewPatientPage from './pages/NewPatientPage';
import PainLogPage from './pages/PainLogPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/report' element={<ProgressReportPage />}/>
        <Route path='/contact' element={<PatientContactPage />}/>
        <Route path='/newPatient' element={<NewPatientPage />}/>
        <Route path='/painLog' element={<PainLogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
