import React from 'react'

// Visual enhancement: colored badges per patient type
export default function Badge({ type }) {
  const t = (type || '').toLowerCase()
  const map = {
    emergency: 'badge emergency',
    hospitalization: 'badge hospitalization',
    outpatient: 'badge outpatient'
  }
  const cls = map[t] || 'badge'
  const label = type === 'EMERGENCY' ? 'Urgencias' : type === 'HOSPITALIZATION' ? 'Hospitalización' : type === 'OUTPATIENT' ? 'Consulta externa' : type
  return <span className={cls}>{label}</span>
}

