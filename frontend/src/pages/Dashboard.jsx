import React from 'react'
import Card from '../components/Card'

export default function Dashboard({ role }) {
  return (
    <div className="grid-2">
      <Card title="Panel principal" subtitle="Resumen y accesos rápidos">
        {role === 'Médico' && <p>Bienvenido, doctor. Acceda a sus pacientes y registros.</p>}
        {role === 'Enfermero' && <p>Bienvenido, enfermería. Revise signos vitales y reportes.</p>}
        {role === 'Administrador' && <p>Bienvenido, administración. Gestione configuración y usuarios.</p>}
      </Card>
      <Card title="Sugerencias" subtitle="Atajos y tips">
        <ul className="list">
          <li className="list-item">Ir a “Pacientes” para crear y editar historias.</li>
          <li className="list-item">Duplicar “Plantillas” para personalizar exámenes.</li>
          <li className="list-item">Genere reportes con firma y marca de agua.</li>
        </ul>
      </Card>
    </div>
  )
}
