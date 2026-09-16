import React from 'react'
import ar from "../images/Comida Española/ARROZ CALDOSO CON POLLO.jpg"
import ba from "../images/Comida Española/BACALAO A LA VIZCAÍNA.jpg"
import co from "../images/Comida Española/COCIDO MADRILEÑO.jpg"
import pa from "../images/Comida Española/PAELLA VALENCIANA.jpg"
import to from "../images/Comida Española/TORREZNOS.jpg"
import { Footer } from './Footer'

export const Espanola = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:20}}>

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={ar} alt="..." />
                    <h2>ARROZ CALDOSO CON POLLO</h2>
                    <p>Un platillo español que combina arroz con un caldo espeso, generalmente cocido con pollo y sazonado con hierbas y especias. Este plato es reconfortante y tiene una textura más húmeda que otros platos de arroz.</p>
                    <p><a className="btn btn-secondary" href="# ">Ver Más &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={ba} alt="..."/>
                    <h2>BACALAO A LA VIZCAÍNA</h2>
                    <p>Una receta de bacalao en la que el pescado se cocina en una salsa de tomate y pimientos choriceros, que son pimientos secos y ahumados. El resultado es un plato sabroso y tradicional.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={co} alt="..."/>
                    <h2>COCIDO MADRILEÑO</h2>
                    <p>Un guiso español característico de Madrid que incluye garbanzos, carne (generalmente pollo, cerdo y ternera), embutidos, como chorizo y morcilla, verduras y a veces arroz. Se sirve en varias etapas, primero la sopa, luego los garbanzos y la carne..</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={pa} alt="..."/>
                    <h2>PAELLA VALENCIANA</h2>
                    <p>Uno de los platos más emblemáticos de la cocina española, la paella valenciana es un arroz cocido con azafrán y vegetales, y puede incluir pollo, conejo y judías verdes. Se cocina en una paellera y se presenta en una capa delgada, desarrollando una costra dorada en la base.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={to} alt="..."/>
                    <h2>TORREZNOS</h2>
                    <p>Tiras gruesas de tocino o panceta fritas hasta que quedan crujientes. Los torreznos son un aperitivo popular en España y a menudo se sirven como acompañamiento o tapa en bares y restaurantes. Su textura crujiente y sabor intenso son apreciados por muchos.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
               
                </div><Footer/>

            </div>
        </center>
    </>
  )
}
