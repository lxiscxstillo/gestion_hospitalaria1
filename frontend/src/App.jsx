import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import MedicalRecordEditor from './pages/MedicalRecordEditor'
import Templates from './pages/Templates'
import Navbar from './components/Navbar'

export default function App() {
  const [role, setRole] = useState(null)
  const navigate = useNavigate()

  const logout = () => { setRole(null); navigate('/') }

  return (
    <div>
      <Navbar role={role} onLogout={logout} />
      <div className="container page">
        <Routes>
          <Route path="/" element={<Login onSelectRole={setRole} />} />
          <Route path="/dashboard" element={role ? <Dashboard role={role} /> : <Navigate to="/" />} />
          <Route path="/pacientes" element={role ? <Patients /> : <Navigate to="/" />} />
          <Route path="/pacientes/:id/historia" element={role ? <MedicalRecordEditor /> : <Navigate to="/" />} />
          <Route path="/plantillas" element={role ? <Templates /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
}
