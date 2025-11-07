import React from 'react'

// Visual enhancement: reusable card with elevation and entrance animation
export default function Card({ title, subtitle, children, style }) {
  return (
    <div className="card" style={style}>
      {title && <h4 className="card-title">{title}</h4>}
      {subtitle && <div className="card-subtle">{subtitle}</div>}
      {children}
    </div>
  )
}

