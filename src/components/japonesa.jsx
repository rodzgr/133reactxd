import React from 'react'
import luz from "../images/Comida Japonesa/Luzianasushi Temaki.jpg"
import pizza from "../images/Comida Japonesa/Pizza Sushi.jpg"
import roti from "../images/Comida Japonesa/Rotinada juh.jpg"
import salm from "../images/Comida Japonesa/Salmón Sushi Roll.jpg"
import sush from "../images/Comida Japonesa/Sushi con camarones.jpg"
import { Footer } from './Footer'

export const Japonesa = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:20}}>

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={luz} alt="..." />
                    <h2>LUZIANASUSHI TEMAKI</h2>
                    <p>Un Temaki es un cono de alga nori relleno de arroz y diversos ingredientes. Luzianasushi Temaki podría referirse a una variante que lleva ingredientes frescos y sabores característicos de la cocina japonesa, como pescado crudo, aguacate, pepino y salsa teriyaki, todo enrollado de manera artesanal.</p>
                    <p><a className="btn btn-secondary" href="# ">Ver Más &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={pizza} alt="..."/>
                    <h2>PIZZA SUSHI</h2>
                    <p>Una fusión creativa que combina elementos de la pizza y el sushi. Puede incluir una base de arroz, láminas de alga nori, variedad de pescados o mariscos, aguacate y otros ingredientes, presentados de manera que recuerde visualmente a una pizza, pero con sabores típicos de la cocina japonesa.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={roti} alt="..."/>
                    <h2>ROTINADA JUH</h2>
                    <p>Pequeños bocados de arroz presionado cubierto con una porción de pescado crudo, mariscos o, en algunos casos, tortilla japonesa (tamago).
Sashimi:

Finas lonjas de pescado o mariscos crudos, presentados sin arroz. Se sirven para resaltar la frescura y el sabor puro de los ingredientes.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={salm} alt="..."/>
                    <h2>SALMON SUSHI ROLL</h2>
                    <p>Un rollo de sushi que incorpora salmón como ingrediente principal. Puede incluir arroz, alga nori, aguacate y pepino, todo envuelto y cortado en porciones. El salmón puede estar crudo o ligeramente cocido, ofreciendo un sabor distintivo y jugoso.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={sush} alt="..."/>
                    <h2>SUSHI CON CAMARONES</h2>
                    <p>Un plato de sushi que incorpora camarones como parte central. Puede ser un nigiri con camarones encima del arroz, un rollo de sushi con camarones en el interior junto con otros ingredientes, o incluso un temaki con camarones y condimentos, ofreciendo sabores frescos y marinos característicos de la cocina japonesa.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
               
                </div><Footer/>

            </div>
        </center>
    </>
  )
}
