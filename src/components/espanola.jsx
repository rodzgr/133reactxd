import React from 'react'
import ar from '../images/Comida Española/ARROZ CALDOSO CON POLLO.jpg'
import ba from '../images/Comida Española/BACALAO A LA VIZCAÍNA.jpg'
import co from '../images/Comida Española/COCIDO MADRILEÑO.jpg'
import pa from '../images/Comida Española/PAELLA VALENCIANA.jpg'
import to from '../images/Comida Española/TORREZNOS.jpg'
import { PaginaComida } from './PaginaComida'

const platos = [
  {
    id: 'arroz-caldoso',
    nombre: 'Arroz caldoso con pollo',
    imagen: ar,
    descripcion:
      'Combina arroz con un caldo espeso, generalmente cocido con pollo y sazonado con hierbas y especias. Reconfortante y más húmedo que otros platos de arroz.',
  },
  {
    id: 'bacalao-vizcaina',
    nombre: 'Bacalao a la vizcaína',
    imagen: ba,
    descripcion:
      'El bacalao se cocina en una salsa de tomate y pimientos choriceros, secos y ahumados. El resultado es un plato sabroso y tradicional.',
  },
  {
    id: 'cocido-madrileno',
    nombre: 'Cocido madrileño',
    imagen: co,
    descripcion:
      'Guiso característico de Madrid con garbanzos, carne (pollo, cerdo y ternera), embutidos como chorizo y morcilla, y verduras. Se sirve en varias etapas.',
  },
  {
    id: 'paella-valenciana',
    nombre: 'Paella valenciana',
    imagen: pa,
    descripcion:
      'Uno de los platos más emblemáticos de España: arroz cocido con azafrán y vegetales, con pollo, conejo y judías verdes, cocinado en paellera hasta lograr una costra dorada.',
  },
  {
    id: 'torreznos',
    nombre: 'Torreznos',
    imagen: to,
    descripcion:
      'Tiras gruesas de tocino o panceta fritas hasta quedar crujientes. Aperitivo popular en España, servido como tapa en bares y restaurantes.',
  },
]

export const Espanola = () => (
  <PaginaComida titulo="Comida española" platos={platos} />
)