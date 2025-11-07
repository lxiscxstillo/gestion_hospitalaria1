// In dev, go through Vite proxy to avoid CORS
const BASE = import.meta.env.DEV ? '/api' : (import.meta.env.VITE_API_BASE || 'http://localhost:8081/api')

export async function listPatients() {
  const r = await fetch(`${BASE}/patients/views`)
  return r.json()
}

export async function createPatient(data) {
  const r = await fetch(`${BASE}/patients`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  })
  return r.json()
}

export async function createRecord(data) {
  const r = await fetch(`${BASE}/records`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  })
  return r.json()
}

export async function listRecords(patientId) {
  const r = await fetch(`${BASE}/records/${patientId}`)
  return r.json()
}

export async function listExamTemplates() {
  const r = await fetch(`${BASE}/templates/exams`)
  return r.json()
}
export async function listDiagnosisTemplates() {
  const r = await fetch(`${BASE}/templates/diagnoses`)
  return r.json()
}
export async function duplicateExam(id) {
  const r = await fetch(`${BASE}/templates/exams/${id}/duplicate`, { method: 'POST' })
  return r.json()
}
export async function duplicateDiagnosis(id) {
  const r = await fetch(`${BASE}/templates/diagnoses/${id}/duplicate`, { method: 'POST' })
  return r.json()
}

export async function generateReport({ body, sign, encrypt, watermark }) {
  const r = await fetch(`${BASE}/reports`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ body, sign, encrypt, watermark })
  })
  return r.text()
}
