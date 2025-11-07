import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ onSelectRole }) {
  const navigate = useNavigate()
  const handleSelect = (e) => {
    onSelectRole(e.target.value)
    navigate('/dashboard')
  }
  return (
    <div>
      <h3>Iniciar sesión</h3>
      <label>Rol:&nbsp;</label>
      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>Seleccione…</option>
        <option value="Médico">Médico</option>
        <option value="Enfermero">Enfermero</option>
        <option value="Administrador">Administrador</option>
      </select>
    </div>
  )
}

