import React from 'react'
import char from '../images/Comida Boliviana/Charquecan orureño.jpg'
import fri from '../images/Comida Boliviana/Fricase.jpg'
import pla from '../images/Comida Boliviana/Plato paceño.jpg'
import sil from '../images/Comida Boliviana/Silpancho.jpg'
import sop from '../images/Comida Boliviana/Sopa de mani.jpg'
import { PaginaComida } from './PaginaComida'

const platos = [
  {
    id: 'charquecan',
    nombre: 'Charquecán orureño',
    imagen: char,
    descripcion:
      'Tiene sus antecedentes dentro de la comunidad de los Urus y se popularizó entre los mineros orureños, ya que el charque no se echa a perder con facilidad. Se lo conocía como charque de llama con mote.',
  },
  {
    id: 'fricase',
    nombre: 'Fricasé',
    imagen: fri,
    descripcion:
      'Plato fuerte y muy condimentado, con la reputación popular de ser ideal para curar la resaca. Combina tiernos trozos de cerdo con una variedad de ingredientes y especias que le dan su sabor característico.',
  },
  {
    id: 'plato-paceno',
    nombre: 'Plato paceño',
    imagen: pla,
    descripcion:
      'Está siempre presente en los festejos de homenaje a La Paz y se sirve luego de la tradicional sopa de chairo. Originalmente es un plato vegetariano, aunque con los años algunos hogares le incorporaron carne de res.',
  },
  {
    id: 'silpancho',
    nombre: 'Silpancho',
    imagen: sil,
    descripcion:
      'Plato típico de la cocina boliviana, particularmente del departamento de Cochabamba, donde es considerado una de sus preparaciones más representativas.',
  },
  {
    id: 'sopa-de-mani',
    nombre: 'Sopa de maní',
    imagen: sop,
    descripcion:
      'Caldo ligero y muy versátil: el ingrediente principal es el maní, pero las verduras, la proteína y el carbohidrato pueden variar según lo que tengas a mano. Se sirve como entrada o como plato principal.',
  },
]

export const Boliviana = () => (
  <PaginaComida titulo="Comida boliviana" platos={platos} />
)