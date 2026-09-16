import React from 'react'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'
import '../styles/ContentHome.css'
const recetas = [
  {
    id: 'fideos-tofu',
    imagen: card1,
    titulo: 'Fideos de arroz con salteado de tofu y pimiento',
    ingredientes: [
      'Fideos de arroz (120 g)',
      'Tofu firme (200 g)',
      'Pimiento rojo (1)',
      'Jengibre fresco (un trocito)',
      'Salsa de soja (15 ml)',
      'Curry molido, ajo granulado y cúrcuma',
      'Lima, pimienta negra, sal y aceite de oliva',
    ],
  },
  {
    id: 'revuelto-tofu',
    imagen: card2,
    titulo: 'Revuelto vegano de tofu',
    ingredientes: [
      'Tofu firme (250 g)',
      'Cebolla roja (1/2) y apio (1 tallo)',
      'Jengibre fresco (un trocito)',
      'Concentrado de tomate, cúrcuma y comino molidos',
      'Pimentón dulce o picante, vino blanco',
      'Ralladura de limón, pimienta, sal y perejil o cilantro',
    ],
  },
  {
    id: 'curry-garbanzos',
    imagen: card3,
    titulo: 'Curry de garbanzos con mango',
    ingredientes: [
      'Garbanzos cocidos (300 g)',
      'Ajo (2 dientes) y cebolleta pequeña (1)',
      'Cilantro y comino en grano, hoja de curry o laurel',
      'Puerro, zanahoria y apio pequeños',
      'Curry molido, mango maduro y leche de coco (200 g)',
      'Zumo de limón, pimienta, sal y aceite de oliva',
    ],
  },
]

export const ContentHome = () => {
  return (
    <section className="contenedor recetas">
      <h2 className="recetas__titulo">Recetas del momento</h2>

      <div className="recetas__grid">
        {recetas.map((receta) => (
          <article className="receta-card" key={receta.id}>
            <img src={receta.imagen} alt={receta.titulo} />
            <div className="receta-card__cuerpo">
              <h3>{receta.titulo}</h3>
              <ul>
                {receta.ingredientes.map((ingrediente) => (
                  <li key={ingrediente}>{ingrediente}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}