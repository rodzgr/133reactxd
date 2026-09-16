import React from 'react'
import luz from '../images/Comida Japonesa/Luzianasushi Temaki.jpg'
import pizza from '../images/Comida Japonesa/Pizza Sushi.jpg'
import roti from '../images/Comida Japonesa/Rotinada juh.jpg'
import salm from '../images/Comida Japonesa/Salmón Sushi Roll.jpg'
import sush from '../images/Comida Japonesa/Sushi con camarones.jpg'
import { PaginaComida } from './PaginaComida'

const platos = [
  {
    id: 'luzianasushi-temaki',
    nombre: 'Luzianasushi temaki',
    imagen: luz,
    descripcion:
      'Un temaki es un cono de alga nori relleno de arroz y diversos ingredientes. Esta variante lleva ingredientes frescos como pescado crudo, aguacate, pepino y salsa teriyaki, enrollado de forma artesanal.',
  },
  {
    id: 'pizza-sushi',
    nombre: 'Pizza sushi',
    imagen: pizza,
    descripcion:
      'Una fusión creativa entre pizza y sushi: base de arroz, láminas de alga nori, pescado o mariscos y aguacate, presentados de forma que recuerda a una pizza pero con sabores japoneses.',
  },
  {
    id: 'nigiri',
    nombre: 'Nigiri y sashimi',
    imagen: roti,
    descripcion:
      'Pequeños bocados de arroz presionado cubiertos con pescado crudo, mariscos o tortilla japonesa (tamago). El sashimi son finas lonjas de pescado o mariscos crudos, servidas sin arroz para resaltar su frescura.',
  },
  {
    id: 'salmon-roll',
    nombre: 'Salmón sushi roll',
    imagen: salm,
    descripcion:
      'Rollo de sushi con salmón como ingrediente principal, arroz, alga nori, aguacate y pepino. El salmón puede estar crudo o ligeramente cocido, con un sabor jugoso y distintivo.',
  },
  {
    id: 'sushi-camarones',
    nombre: 'Sushi con camarones',
    imagen: sush,
    descripcion:
      'Puede ser un nigiri con camarones sobre el arroz, un rollo con camarones y otros ingredientes, o un temaki con camarones y condimentos: sabores frescos y marinos.',
  },
]

export const Japonesa = () => (
  <PaginaComida titulo="Comida japonesa" platos={platos} />
)