import React from 'react'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'
import { PaginaComida } from './PaginaComida'

const platos = [
  {
    id: 'ramen',
    nombre: 'Ramen',
    imagen: card1,
    descripcion:
      'Sopa japonesa de fideos muy sabrosa con caldo aromático, verduras y toppings como huevo, cerdo o tofu.',
  },
  {
    id: 'wantan',
    nombre: 'Wantán frito',
    imagen: card2,
    descripcion:
      'Empanaditas de masa fina rellenas de cerdo, gambas o vegetales, ideales para disfrutar con salsa especial.',
  },
  {
    id: 'pollo-agridulce',
    nombre: 'Pollo agridulce',
    imagen: card3,
    descripcion:
      'Plato muy popular en la cocina china con trozos de pollo cocinados con salsa agridulce y vegetales crujientes.',
  },
  {
    id: 'arroz-frito',
    nombre: 'Arroz frito',
    imagen: card1,
    descripcion:
      'Arroz salteado con huevo, verduras y salsa de soja, una opción reconfortante y rápida de preparar.',
  },
  {
    id: 'brochetas',
    nombre: 'Brochetas de pollo',
    imagen: card2,
    descripcion:
      'Brochetas marinadas con especias orientales, sabrosas y aromáticas, perfectas para compartir.',
  },
]

export const China = () => (
  <PaginaComida titulo="Comida china" platos={platos} />
)