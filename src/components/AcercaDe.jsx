import React from 'react'
import acerca from '../images/foto_acercade.jpg'
import { Footer } from './Footer'
import '../styles/AcercaDe.css'
export const AcercaDe = () => {
  return (
    <div>
      <div className="contenedor acerca">
        <div className="acerca__texto">
          <h1>Desarrollador</h1>
          <p><strong>Alumno: </strong>Rodrigo Zanca</p>
          <p><strong>Carrera: </strong>Informática</p>
          <p><strong>Asignatura: </strong>Programación Web III</p>
        </div>

        <div className="acerca__imagen">
          <img src={acerca} alt="Franz Denilson Ayala Isidro" />
        </div>
      </div>

      <Footer />
    </div>
  )
}