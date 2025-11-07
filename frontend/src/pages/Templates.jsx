import React, { useEffect, useState } from 'react'
import { listExamTemplates, listDiagnosisTemplates, duplicateExam, duplicateDiagnosis } from '../services/api'

export default function Templates() {
  const [exams, setExams] = useState([])
  const [diagnoses, setDiagnoses] = useState([])

  useEffect(() => { load() }, [])
  async function load() {
    setExams(await listExamTemplates())
    setDiagnoses(await listDiagnosisTemplates())
  }

  return (
    <div>
      <h3>Plantillas</h3>
      <h4>Plantillas de exámenes</h4>
      <ul>
        {exams.map(t => (
          <li key={t.id}>
            {t.name} — {t.content}
            {" "}
            <button onClick={async () => { await duplicateExam(t.id); await load() }}>Duplicar plantilla</button>
          </li>
        ))}
      </ul>

      <h4>Plantillas de diagnósticos</h4>
      <ul>
        {diagnoses.map(t => (
          <li key={t.id}>
            {t.name} — {t.content}
            {" "}
            <button onClick={async () => { await duplicateDiagnosis(t.id); await load() }}>Duplicar plantilla</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

