import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProgressReportPage from './pages/ProgressReportPage';
import PatientContactPage from './pages/PatientContactPage';
import NewPatientPage from './pages/NewPatientPage';
import PainLogPage from './pages/PainLogPage';
import SignInPage from './pages/SignInPage';
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";
import SelectPatientPage from "./pages/SelectPatientPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <ProgressReportPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <PatientContactPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newPatient"
          element={
            <ProtectedRoute>
              <NewPatientPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/selectPatient"
          element={
            <ProtectedRoute>
              <SelectPatientPage/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/painLog"
          element={
            <ProtectedRoute>
              <PainLogPage />
            </ProtectedRoute>
          }
        />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
