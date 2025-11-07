import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listPatients, createPatient } from '../services/api'
import Card from '../components/Card'
import Button from '../components/Button'
import Loader from '../components/Loader'
import Badge from '../components/Badge'

export default function Patients() {
  const [patients, setPatients] = useState([])
  const [name, setName] = useState('')
  const [type, setType] = useState('EMERGENCY')

  const [loading, setLoading] = useState(true)
  useEffect(() => { load() }, [])
  async function load() {
    setLoading(true)
    try { setPatients(await listPatients()) } finally { setLoading(false) }
  }

  async function submit(e) {
    e.preventDefault()
    await createPatient({ name, type })
    setName('')
    await load()
  }

  return (
    <div className="page" style={{ display: 'grid', gap: 16 }}>
      <Card title="Gestión de Pacientes">
        <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
          <div className="field">
            <label className="label">Nombre</label>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre del paciente" required />
          </div>
          <div className="field">
            <label className="label">Tipo de paciente</label>
            <select className="select" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="EMERGENCY">Urgencias</option>
              <option value="HOSPITALIZATION">Hospitalización</option>
              <option value="OUTPATIENT">Consulta externa</option>
            </select>
          </div>
          <div>
            <Button type="submit">Crear paciente</Button>
          </div>
        </form>
      </Card>

      <Card title="Pacientes" subtitle="Lista unificada">
        {loading ? (
          <Loader />
        ) : (
          <ul className="list">
            {patients.map(p => (
              <li key={p.id} className="list-item">
                <div style={{ display: 'grid', gap: 4 }}>
                  <div style={{ fontWeight: 600 }}>{p.name}</div>
                  <div><Badge type={p.type} /></div>
                </div>
                <Link className="btn ghost" to={`/pacientes/${p.id}/historia`}>Editar historia clínica</Link>
              </li>
            ))}
            {patients.length === 0 && <div className="card-subtle">No hay pacientes todavía.</div>}
          </ul>
        )}
      </Card>
    </div>
  )
}
