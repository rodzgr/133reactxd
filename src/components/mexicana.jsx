import React from 'react'
import burr from '../images/Comida Mexicana/Burritos.jpg'
import chil from '../images/Comida Mexicana/Chilaquiles.jpg'
import flau from '../images/Comida Mexicana/Flautas.jpg'
import nach from '../images/Comida Mexicana/Nachos.jpg'
import taco from '../images/Comida Mexicana/Tacos.jpg'
import { PaginaComida } from './PaginaComida'

const platos = [
  {
    id: 'burritos',
    nombre: 'Burritos',
    imagen: burr,
    descripcion:
      'Plato de origen mexicano: una tortilla de harina de trigo enrollada en forma de ovoide, rellena de diversos ingredientes y acompañada normalmente de frijoles refritos.',
  },
  {
    id: 'chilaquiles',
    nombre: 'Chilaquiles',
    imagen: chil,
    descripcion:
      'Tortillas cortadas, fritas o tostadas que se cocinan en una salsa picante, roja o verde según el tipo de chile usado. Tiene multitud de variantes regionales.',
  },
  {
    id: 'flautas',
    nombre: 'Flautas',
    imagen: flau,
    descripcion:
      'Uno de los llamados "antojitos mexicanos": tortillas enrolladas y fritas, tradicionalmente rellenas de carne deshebrada, que se sirven con crema, queso y salsas.',
  },
  {
    id: 'nachos',
    nombre: 'Nachos',
    imagen: nach,
    descripcion:
      'Trozos de tortilla de maíz fritos, cubiertos con un queso especial llamado "queso para nachos" y acompañados de guacamole, pico de gallo o jalapeños.',
  },
  {
    id: 'tacos',
    nombre: 'Tacos',
    imagen: taco,
    descripcion:
      'Preparación muy popular de México: una tortilla, generalmente de maíz, que se enrolla o dobla para contener diversos ingredientes junto con alguna salsa y verdura.',
  },
]

export const Mexicana = () => (
  <PaginaComida titulo="Comida mexicana" platos={platos} />
)