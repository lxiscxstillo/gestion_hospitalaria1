import React from 'react'
import { Link } from 'react-router-dom'

// Visual enhancement: gradient brand, glassy navbar, hover transitions
export default function Navbar({ role, onLogout }) {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-gradient">Plataforma de Gestión Hospitalaria</span>
        </div>
        <nav className="nav-links">
          <Link className="nav-link" to="/">Inicio</Link>
          {role && <Link className="nav-link" to="/pacientes">Pacientes</Link>}
          {role && <Link className="nav-link" to="/plantillas">Plantillas</Link>}
        </nav>
        <div className="nav-right">
          {role && (
            <>
              <span style={{ color: '#cbd5e1' }}>Rol: {role}</span>
              <button className="btn ghost" onClick={onLogout}>Cerrar sesión</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

