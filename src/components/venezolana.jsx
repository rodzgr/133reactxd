import React from 'react'
import are from '../images/Comida Venezolana/Arepa.jpg'
import cach from '../images/Comida Venezolana/Cachapa.jpg'
import hal from '../images/Comida Venezolana/Hallacas.jpg'
import mon from '../images/Comida Venezolana/Mondongo venezolano.jpg'
import teq from '../images/Comida Venezolana/Tequeños venezolanos de queso.jpg'
import { PaginaComida } from './PaginaComida'

const platos = [
  {
    id: 'arepa',
    nombre: 'Arepa',
    imagen: are,
    descripcion:
      'Panecillo de masa de maíz, redondo y plano, cocinado en parrilla u horneado. Se rellena con queso, jamón, aguacate, pollo o carne mechada, ideal para desayuno o comida.',
  },
  {
    id: 'cachapa',
    nombre: 'Cachapa',
    imagen: cach,
    descripcion:
      'Panqueque grueso elaborado con maíz tierno molido, cocinado a la parrilla y servido con queso blanco rallado, mantequilla o carne mechada. Sabor dulce y textura suave.',
  },
  {
    id: 'hallacas',
    nombre: 'Hallacas',
    imagen: hal,
    descripcion:
      'Especie de tamal venezolano: paquetes de masa de maíz rellenos de un guiso de carne de res, cerdo o pollo, aceitunas y alcaparras, envueltos en hojas de plátano y cocidos al vapor.',
  },
  {
    id: 'mondongo',
    nombre: 'Mondongo venezolano',
    imagen: mon,
    descripcion:
      'Guiso espeso y abundante con callos de res, zanahorias, papas, maíz y condimentos. Plato reconfortante y popular, a menudo acompañado de arepas.',
  },
  {
    id: 'tequenos',
    nombre: 'Tequeños venezolanos',
    imagen: teq,
    descripcion:
      'Palitos de queso envueltos en masa de harina de trigo, fritos hasta quedar dorados y crujientes. Populares en celebraciones, se sirven con guasacaca o alioli.',
  },
]

export const Venezolana = () => (
  <PaginaComida titulo="Comida venezolana" platos={platos} />
)