import React, { useState, useEffect } from 'react'
import { Footer } from './Footer'
import '../styles/Mensajes.css'
const obtenerRegistros = () => {
  const datos = localStorage.getItem('registros')
  return datos ? JSON.parse(datos) : []
}

export const Mensajes = () => {
  const [registros, setRegistros] = useState(obtenerRegistros())
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)

  const enviarMensaje = (evento) => {
    evento.preventDefault()

    const nuevoRegistro = { nombre, correo, mensaje }
    setRegistros([...registros, nuevoRegistro])

    setNombre('')
    setCorreo('')
    setMensaje('')

    setEnviado(true)
    setTimeout(() => setEnviado(false), 3000)
  }

  useEffect(() => {
    localStorage.setItem('registros', JSON.stringify(registros))
  }, [registros])

  return (
    <div>
      <div className="contenedor mensajes">
        <form className="mensajes__formulario" onSubmit={enviarMensaje}>
          <h1>Déjanos un mensaje</h1>

          <input
            className="mensajes__input"
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            className="mensajes__input"
            type="email"
            placeholder="Tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <textarea
            className="mensajes__input"
            placeholder="Tu mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            rows={4}
            required
          />

          <button className="boton boton--principal" type="submit">
            Enviar mensaje
          </button>

          {enviado && (
            <p className="mensajes__confirmacion">¡Gracias! Tu mensaje fue enviado.</p>
          )}
        </form>

        {registros.length > 0 && (
          <div className="mensajes__historial">
            <h2>Mensajes recibidos ({registros.length})</h2>
            <ul>
              {registros.map((registro, indice) => (
                <li key={indice}>
                  <strong>{registro.nombre}</strong> ({registro.correo}): {registro.mensaje}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}