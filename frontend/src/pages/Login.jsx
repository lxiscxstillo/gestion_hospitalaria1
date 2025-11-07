import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Login({ onSelectRole }) {
  const navigate = useNavigate()
  const handleSelect = (e) => {
    onSelectRole(e.target.value)
    navigate('/dashboard')
  }
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
      <Card title="Iniciar sesión" subtitle="Seleccione su rol para continuar" style={{ width: 400 }}>
        <div className="field" style={{ marginBottom: 10 }}>
          <label className="label">Rol</label>
          <select className="select" onChange={handleSelect} defaultValue="">
            <option value="" disabled>Seleccione…</option>
            <option value="Médico">Médico</option>
            <option value="Enfermero">Enfermero</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>
        <Button variant="ghost" onClick={() => navigate('/dashboard')}>Entrar</Button>
      </Card>
    </div>
  )
}
