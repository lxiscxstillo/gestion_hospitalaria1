import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createRecord, listRecords, generateReport } from '../services/api'

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

  useEffect(() => { load() }, [id])
  async function load() { setRecords(await listRecords(id)) }

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
    <div>
      <h3>Historia clínica</h3>
      <form onSubmit={save} style={{ display: 'grid', gap: 8, maxWidth: 600 }}>
        <label>Signos vitales</label>
        <textarea value={vitalSigns} onChange={(e) => setVitalSigns(e.target.value)} />
        <label>Diagnóstico</label>
        <textarea value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
        <label>Tratamientos</label>
        <textarea value={treatments} onChange={(e) => setTreatments(e.target.value)} />
        <button type="submit">Guardar historia clínica</button>
      </form>

      <h4>Registros existentes</h4>
      <ul>
        {records.map(r => (
          <li key={r.id}>
            <strong>Signos:</strong> {r.vitalSigns} | <strong>Dx:</strong> {r.diagnosis}
          </li>
        ))}
      </ul>

      <h4>Reportes</h4>
      <div style={{ display: 'grid', gap: 8, maxWidth: 600 }}>
        <label>Contenido del reporte</label>
        <textarea value={reportText} onChange={(e) => setReportText(e.target.value)} />
        <label>
          <input type="checkbox" checked={sign} onChange={(e) => setSign(e.target.checked)} /> Firmar digitalmente
        </label>
        <label>
          <input type="checkbox" checked={encrypt} onChange={(e) => setEncrypt(e.target.checked)} /> Encriptar
        </label>
        <label>
          <input type="checkbox" checked={watermark} onChange={(e) => setWatermark(e.target.checked)} /> Marca de agua
        </label>
        <button onClick={genReport}>Generar reporte</button>
      </div>
    </div>
  )
}

