import { useState } from 'react'
import logo from './assets/OSU_LOGO.png'
import viteLogo from '/vite.svg'
import './App.css'
import DiagnosisSummary from './components/DiagnosisSummary'
import PatientList from './components/PatientList'
import PatientInfo from './components/PatientInfo'
import Schedule from './components/Schedule'
import PainLog from './components/PainLog'
import ProgressReport from './components/ProgressReport'
import PatientContact from './components/PatientContact'

function App() {
  const name = "Collins"

  return (
    <div>
      <img src={logo} alt="OSU Logo" width={96} height={72} className='pt-6 pl-1'/>
      <DiagnosisSummary></DiagnosisSummary>
      <PatientInfo></PatientInfo>
      <Schedule></Schedule>
      <PainLog></PainLog>
      <ProgressReport></ProgressReport>
      <PatientList></PatientList>
      <PatientContact></PatientContact>

    </div>
  )
}

export default App
