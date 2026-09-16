import React from 'react'
import { NavLink } from 'react-router-dom'
import { Footer } from './Footer'
import '../styles/PaginaInfo.css'
const tipos = [
  { ruta: '/boli', texto: 'Comida boliviana' },
  { ruta: '/mexi', texto: 'Comida mexicana' },
  { ruta: '/japo', texto: 'Comida japonesa' },
  { ruta: '/colom', texto: 'Comida colombiana' },
  { ruta: '/venez', texto: 'Comida venezolana' },
  { ruta: '/espa', texto: 'Comida española' },
  { ruta: '/ita', texto: 'Comida italiana' },
  { ruta: '/china', texto: 'Comida china' },
]

export const TiposDeComida = () => {
  return (
    <div>
      <div className="contenedor pagina-info">
        <h1>Tipos de comidas</h1>
        <p>En Caimán del Oriente ofrecemos un recorrido por sabores de distintos países. Elige una cocina para ver el menú completo.</p>

        <ul className="lista-tipos">
          {tipos.map((tipo) => (
            <li key={tipo.ruta}>
              <NavLink to={tipo.ruta}>{tipo.texto}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}