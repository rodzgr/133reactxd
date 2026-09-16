import React from 'react'
import '../styles/Footer.css'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="contenedor">
        <ul className="site-footer__enlaces">
          <li><NavLink to="/horarios">Horarios</NavLink></li>
          <li><NavLink to="/tipos-comida">Tipos de comidas</NavLink></li>
          <li><NavLink to="/servicios">Servicios</NavLink></li>
          <li><NavLink to="/faqs">FAQs</NavLink></li>
          <li><NavLink to="/mensajes">Contáctenos</NavLink></li>
        </ul>
        <p className="site-footer__copy">
          &copy; {anioActual} Restaurante Caimán del Oriente — Franz Denilson Ayala Isidro
        </p>
      </div>
    </footer>
  )
}