import React from 'react'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

// Lista de enlaces del menú. Para agregar una página nueva, solo hay
// que agregar un objeto aquí; no hace falta tocar el JSX de abajo.
const enlaces = [
  { ruta: '/principal', texto: 'Principal' },
  { ruta: '/boli', texto: 'Comida boliviana' },
  { ruta: '/mexi', texto: 'Comida mexicana' },
  { ruta: '/japo', texto: 'Comida japonesa' },
  { ruta: '/china', texto: 'Comida china' }, /////////////////////
  { ruta: '/colom', texto: 'Comida colombiana' },
  { ruta: '/venez', texto: 'Comida venezolana' },
  { ruta: '/espa', texto: 'Comida española' },
  { ruta: '/ita', texto: 'Comida italiana' },
  { ruta: '/acercade', texto: 'Sobre el desarrollador' },
  { ruta: '/mensajes', texto: 'Mensajes' },
]

export const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="contenedor site-header__barra">
          <span className="site-header__marca">Restaurante Caimán del Oriente</span>

          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="site-header__enlaces">
              {enlaces.map((enlace) => (
                <li key={enlace.ruta}>
                  <NavLink
                    to={enlace.ruta}
                    className={({ isActive }) =>
                      isActive ? 'activo' : undefined
                    }
                  >
                    {enlace.texto}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}