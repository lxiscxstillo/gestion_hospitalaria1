import React from 'react'

export default function Dashboard({ role }) {
  return (
    <div>
      <h3>Panel principal</h3>
      {role === 'Médico' && <p>Bienvenido, doctor. Acceda a sus pacientes y registros.</p>}
      {role === 'Enfermero' && <p>Bienvenido, enfermería. Revise signos vitales y reportes.</p>}
      {role === 'Administrador' && <p>Bienvenido, administración. Gestione configuración y usuarios.</p>}
    </div>
  )
}

