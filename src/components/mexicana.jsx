import React from 'react'
import burr from "../images/Comida Mexicana/Burritos.jpg"
import chil from "../images/Comida Mexicana/Chilaquiles.jpg"
import flau from "../images/Comida Mexicana/Flautas.jpg"
import nach from "../images/Comida Mexicana/Nachos.jpg"
import taco from "../images/Comida Mexicana/Tacos.jpg"
import { Footer } from './Footer'

export const Mexicana = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:20}}>

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={burr} alt="..." />
                    <h2>BURRITOS</h2>
                    <p>El burrito, burrito de harina taco de harina o burro​ es un plato de origen mexicano que consiste en una tortilla de harina de trigo enrollada en forma de ovoide rellena de diversos ingredientes y que se suele acompañar de frijoles refritos.</p>
                    <p><a className="btn btn-secondary" href="# ">Ver Más &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={chil} alt="..."/>
                    <h2>CHILAQUILES</h2>
                    <p>Los chilaquiles son un plato típico mexicano elaborado con tortillas cortadas, fritas o tostadas que se cocinan en una salsa picante ya sea roja o verde dependiendo del tipo de chile usado​ y tiene multitud de variantes regionales.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={flau} alt="..."/>
                    <h2>FLAUTAS</h2>
                    <p>Las flautas son un platillo de la gastronomía mexicana y forma parte de los conocidos como "antojitos mexicanos".</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={nach} alt="..."/>
                    <h2>NACHOS</h2>
                    <p>Los nachos son un platillo de origen mexicano, que consiste en freír trozos de tortilla de maíz cubiertos con un queso especial llamado «queso para nachos».</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={taco} alt="..."/>
                    <h2>TACOS</h2>
                    <p>El taco es una preparación culinaria muy popular de México que consiste en una tortilla, generalmente de maíz, que comúnmente se enrolla para contener dentro diversos ingredientes y algún tipo de salsa y verdura.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                
                </div><Footer/>

            </div>
        </center>
    </>
  )
}
