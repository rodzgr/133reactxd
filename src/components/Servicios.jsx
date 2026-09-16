import React from 'react'
import { Footer } from './Footer'
import '../styles/PaginaInfo.css'
const servicios = [
  {
    titulo: 'Servicio a domicilio',
    descripcion: 'Pide tu plato favorito y te lo llevamos a casa dentro de la ciudad.',
  },
  {
    titulo: 'Reservas',
    descripcion: 'Reserva tu mesa con anticipación para grupos grandes o fechas especiales.',
  },
  {
    titulo: 'Eventos privados',
    descripcion: 'Organizamos cumpleaños, aniversarios y reuniones de empresa en nuestro salón.',
  },
  {
    titulo: 'Terraza al aire libre',
    descripcion: 'Disfruta tu comida en nuestra terraza, ideal para almuerzos en familia.',
  },
]

export const Servicios = () => {
  return (
    <div>
      <div className="contenedor pagina-info">
        <h1>Nuestros servicios</h1>

        <div className="grid-servicios">
          {servicios.map((servicio) => (
            <div className="tarjeta-servicio" key={servicio.titulo}>
              <h2>{servicio.titulo}</h2>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}