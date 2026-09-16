import React from 'react'
import { Footer } from './Footer'

import '../styles/PaginaComida.css'
export const PaginaComida = ({ titulo, platos }) => {
  return (
    <section className="pagina-comida">
      <div className="contenedor">
        <h1 className="pagina-comida__titulo">{titulo}</h1>

        <ol className="menu-lista">
          {platos.map((plato, index) => (
            <li className="menu-plato" key={plato.id}>
              <span className="menu-plato__numero">
                {String(index + 1).padStart(2, '0')}
              </span>

              <img
                className="menu-plato__imagen"
                src={plato.imagen}
                alt={plato.nombre}
              />

              <div className="menu-plato__texto">
                <h2>{plato.nombre}</h2>
                <p>{plato.descripcion}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <Footer />
    </section>
  )
}