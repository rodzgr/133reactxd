import React from 'react'
import { Footer } from './Footer'
import '../styles/PaginaInfo.css'
const preguntas = [
  {
    pregunta: '¿Necesito reservar con anticipación?',
    respuesta: 'No es obligatorio, pero se recomienda para grupos de más de 6 personas o en fechas especiales.',
  },
  {
    pregunta: '¿Tienen opciones vegetarianas?',
    respuesta: 'Sí, varias de nuestras recetas pueden prepararse sin carne. Pregunta a tu mesero por las opciones del día.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Aceptamos efectivo, tarjetas de débito/crédito y pagos por QR.',
  },
  {
    pregunta: '¿Hacen envíos a domicilio?',
    respuesta: 'Sí, dentro de la ciudad. Puedes coordinar tu pedido llamando al restaurante o dejando tu mensaje en la sección Mensajes.',
  },
  {
    pregunta: '¿Aceptan mascotas?',
    respuesta: 'Sí, son bienvenidas en nuestra terraza al aire libre.',
  },
]

export const Faqs = () => {
  return (
    <div>
      <div className="contenedor pagina-info">
        <h1>Preguntas frecuentes</h1>

        <dl className="lista-faqs">
          {preguntas.map((item) => (
            <div className="lista-faqs__item" key={item.pregunta}>
              <dt>{item.pregunta}</dt>
              <dd>{item.respuesta}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Footer />
    </div>
  )
}