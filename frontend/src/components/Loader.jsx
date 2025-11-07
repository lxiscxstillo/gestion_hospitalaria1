import React from 'react'

// Visual enhancement: spinner for loading states
export default function Loader({ label = 'Cargando…' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div className="loader" />
      <span style={{ color: '#cbd5e1' }}>{label}</span>
    </div>
  )
}

