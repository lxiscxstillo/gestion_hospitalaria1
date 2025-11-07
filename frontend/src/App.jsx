import React, { useState } from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import MedicalRecordEditor from './pages/MedicalRecordEditor'
import Templates from './pages/Templates'

export default function App() {
  const [role, setRole] = useState(null)
  const navigate = useNavigate()

  const logout = () => { setRole(null); navigate('/') }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 16 }}>
      <header style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <h2>Plataforma de Gestión Hospitalaria</h2>
        <nav style={{ display: 'flex', gap: 8 }}>
          <Link to="/">Inicio</Link>
          {role && <Link to="/pacientes">Pacientes</Link>}
          {role && <Link to="/plantillas">Plantillas</Link>}
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          {role ? (
            <>
              <span style={{ marginRight: 12 }}>Rol: {role}</span>
              <button onClick={logout}>Cerrar sesión</button>
            </>
          ) : null}
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Login onSelectRole={setRole} />} />
        <Route path="/dashboard" element={role ? <Dashboard role={role} /> : <Navigate to="/" />} />
        <Route path="/pacientes" element={role ? <Patients /> : <Navigate to="/" />} />
        <Route path="/pacientes/:id/historia" element={role ? <MedicalRecordEditor /> : <Navigate to="/" />} />
        <Route path="/plantillas" element={role ? <Templates /> : <Navigate to="/" />} />
      </Routes>
    </div>
  )
}

