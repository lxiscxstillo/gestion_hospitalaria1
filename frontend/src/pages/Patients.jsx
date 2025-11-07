import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listPatients, createPatient } from '../services/api'

export default function Patients() {
  const [patients, setPatients] = useState([])
  const [name, setName] = useState('')
  const [type, setType] = useState('EMERGENCY')

  useEffect(() => { load() }, [])
  async function load() { setPatients(await listPatients()) }

  async function submit(e) {
    e.preventDefault()
    await createPatient({ name, type })
    setName('')
    await load()
  }

  return (
    <div>
      <h3>Gestión de Pacientes</h3>
      <form onSubmit={submit} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <label>Nombre:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre del paciente" required />
        <label>Tipo de paciente:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="EMERGENCY">Urgencias</option>
          <option value="HOSPITALIZATION">Hospitalización</option>
          <option value="OUTPATIENT">Consulta externa</option>
        </select>
        <button type="submit">Crear paciente</button>
      </form>

      <h4>Pacientes</h4>
      <ul>
        {patients.map(p => (
          <li key={p.id}>
            {p.name} — {p.type}
            {" "}
            <Link to={`/pacientes/${p.id}/historia`}>Editar historia clínica</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

