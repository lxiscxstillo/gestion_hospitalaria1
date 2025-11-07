import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createRecord, listRecords, generateReport } from '../services/api'
import Card from '../components/Card'
import Button from '../components/Button'
import Loader from '../components/Loader'

export default function MedicalRecordEditor() {
  const { id } = useParams()
  const [vitalSigns, setVitalSigns] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const [treatments, setTreatments] = useState('')
  const [records, setRecords] = useState([])
  const [reportText, setReportText] = useState('')
  const [sign, setSign] = useState(true)
  const [encrypt, setEncrypt] = useState(false)
  const [watermark, setWatermark] = useState(false)

  const [loading, setLoading] = useState(true)
  useEffect(() => { load() }, [id])
  async function load() {
    setLoading(true)
    try { setRecords(await listRecords(id)) } finally { setLoading(false) }
  }

  async function save(e) {
    e.preventDefault()
    await createRecord({ patientId: id, vitalSigns, diagnosis, treatments })
    setVitalSigns(''); setDiagnosis(''); setTreatments('')
    await load()
  }

  async function genReport() {
    const text = await generateReport({ body: reportText, sign, encrypt, watermark })
    alert('Reporte generado:\n\n' + text)
  }

  return (
    <div className="grid-2 page">
      <Card title="Historia clínica">
        <form onSubmit={save} style={{ display: 'grid', gap: 12 }}>
          <div className="field">
            <label className="label">Signos vitales</label>
            <textarea className="textarea" value={vitalSigns} onChange={(e) => setVitalSigns(e.target.value)} />
          </div>
          <div className="field">
            <label className="label">Diagnóstico</label>
            <textarea className="textarea" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
          </div>
          <div className="field">
            <label className="label">Tratamientos</label>
            <textarea className="textarea" value={treatments} onChange={(e) => setTreatments(e.target.value)} />
          </div>
          <div>
            <Button type="submit">Guardar historia clínica</Button>
          </div>
        </form>
        <div style={{ marginTop: 16 }}>
          <h4 className="card-title" style={{ marginTop: 0 }}>Registros existentes</h4>
          {loading ? <Loader /> : (
            <ul className="list">
              {records.map(r => (
                <li key={r.id} className="list-item">
                  <div style={{ display: 'grid', gap: 4 }}>
                    <div><strong>Signos:</strong> {r.vitalSigns || '—'}</div>
                    <div><strong>Dx:</strong> {r.diagnosis || '—'}</div>
                  </div>
                </li>
              ))}
              {records.length === 0 && <div className="card-subtle">Aún no hay registros.</div>}
            </ul>
          )}
        </div>
      </Card>

      <Card title="Reportes" subtitle="Opciones de capas (firma, encriptado, marca de agua)">
        <div style={{ display: 'grid', gap: 12 }}>
          <div className="field">
            <label className="label">Contenido del reporte</label>
            <textarea className="textarea" value={reportText} onChange={(e) => setReportText(e.target.value)} />
          </div>
          <label className="label"><input type="checkbox" checked={sign} onChange={(e) => setSign(e.target.checked)} />{' '}Firmar digitalmente</label>
          <label className="label"><input type="checkbox" checked={encrypt} onChange={(e) => setEncrypt(e.target.checked)} />{' '}Encriptar</label>
          <label className="label"><input type="checkbox" checked={watermark} onChange={(e) => setWatermark(e.target.checked)} />{' '}Marca de agua</label>
          <Button onClick={genReport}>Generar reporte</Button>
        </div>
      </Card>
    </div>
  )
}
