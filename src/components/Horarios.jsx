import React from 'react'
import { Footer } from './Footer'
import '../styles/PaginaInfo.css'
const horario = [
  { dia: 'Lunes a viernes', hora: '11:00 a.m. – 10:00 p.m.' },
  { dia: 'Sábados', hora: '10:00 a.m. – 11:00 p.m.' },
  { dia: 'Domingos', hora: '10:00 a.m. – 9:00 p.m.' },
  { dia: 'Feriados', hora: '12:00 p.m. – 8:00 p.m.' },
]

export const Horarios = () => {
  return (
    <div>
      <div className="contenedor pagina-info">
        <h1>Horarios de atención</h1>
        <p>Te esperamos todos los días de la semana con nuestra carta completa.</p>

        <ul className="lista-horarios">
          {horario.map((item) => (
            <li key={item.dia}>
              <span>{item.dia}</span>
              <span>{item.hora}</span>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}