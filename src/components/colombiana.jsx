import React from 'react'
import arr from '../images/Comida Colombiana/Arroz chino al estilo colombiano.jpg'
import ban from '../images/Comida Colombiana/Bandeja Paisa.jpg'
import car from '../images/Comida Colombiana/Carne a la parrilla.jpg'
import pic from '../images/Comida Colombiana/Picada casera.jpg'
import tos from '../images/Comida Colombiana/Tostones.jpg'
import { PaginaComida } from './PaginaComida'

const platos = [
  {
    id: 'arroz-chino',
    nombre: 'Arroz chino al estilo colombiano',
    imagen: arr,
    descripcion:
      'Una fusión única de la tradicional receta de arroz chino con influencias colombianas: plátano maduro, carne, huevos y condimentos criollos.',
  },
  {
    id: 'bandeja-paisa',
    nombre: 'Bandeja paisa',
    imagen: ban,
    descripcion:
      'Plato emblemático de la región paisa: una generosa combinación de arroz, frijoles, carne molida, chicharrón, huevo frito, aguacate y plátano.',
  },
  {
    id: 'carne-a-la-parrilla',
    nombre: 'Carne a la parrilla',
    imagen: car,
    descripcion:
      'Jugosos cortes de carne, sazonados y asados a la parrilla para resaltar su sabor natural, acompañados de papas, arepas, guacamole y salsas criollas.',
  },
  {
    id: 'picada-casera',
    nombre: 'Picada casera',
    imagen: pic,
    descripcion:
      'Una mezcla de bocados y aperitivos caseros: carnes frías, quesos, empanadas, arepas, guacamole, salsas y aceitunas. Ideal para compartir en reuniones informales.',
  },
  {
    id: 'tostones',
    nombre: 'Tostones',
    imagen: tos,
    descripcion:
      'Trozos de plátano verde aplastados y fritos hasta obtener una textura crujiente por fuera y suave por dentro. Se sirven con salsas, guacamole o como acompañamiento.',
  },
]

export const Colombiana = () => (
  <PaginaComida titulo="Comida colombiana" platos={platos} />
)