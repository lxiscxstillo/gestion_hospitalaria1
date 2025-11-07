import React, { useEffect, useState } from 'react'
import { listExamTemplates, listDiagnosisTemplates, duplicateExam, duplicateDiagnosis } from '../services/api'
import Card from '../components/Card'
import Button from '../components/Button'
import Loader from '../components/Loader'

export default function Templates() {
  const [exams, setExams] = useState([])
  const [diagnoses, setDiagnoses] = useState([])

  const [loading, setLoading] = useState(true)
  useEffect(() => { load() }, [])
  async function load() {
    setLoading(true)
    try {
      setExams(await listExamTemplates())
      setDiagnoses(await listDiagnosisTemplates())
    } finally { setLoading(false) }
  }

  return (
    <div className="page" style={{ display: 'grid', gap: 16 }}>
      <Card title="Plantillas" subtitle="Exámenes y diagnósticos disponibles" />
      {loading ? (
        <Loader />
      ) : (
        <div className="grid-2">
          <Card title="Plantillas de exámenes">
            <ul className="list">
              {exams.map(t => (
                <li key={t.id} className="list-item">
                  <div>
                    <div style={{ fontWeight: 600 }}>{t.name}</div>
                    <div className="card-subtle">{t.content}</div>
                  </div>
                  <Button onClick={async () => { await duplicateExam(t.id); await load() }}>Duplicar plantilla</Button>
                </li>
              ))}
              {exams.length === 0 && <div className="card-subtle">No hay plantillas de exámenes.</div>}
            </ul>
          </Card>
          <Card title="Plantillas de diagnósticos">
            <ul className="list">
              {diagnoses.map(t => (
                <li key={t.id} className="list-item">
                  <div>
                    <div style={{ fontWeight: 600 }}>{t.name}</div>
                    <div className="card-subtle">{t.content}</div>
                  </div>
                  <Button onClick={async () => { await duplicateDiagnosis(t.id); await load() }}>Duplicar plantilla</Button>
                </li>
              ))}
              {diagnoses.length === 0 && <div className="card-subtle">No hay plantillas de diagnósticos.</div>}
            </ul>
          </Card>
        </div>
      )}
    </div>
  )
}
