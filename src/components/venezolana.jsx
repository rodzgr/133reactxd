import React from 'react'
import are from "../images/Comida Venezolana/Arepa.jpg"
import cach from "../images/Comida Venezolana/Cachapa.jpg"
import hal from "../images/Comida Venezolana/Hallacas.jpg"
import mon from "../images/Comida Venezolana/Mondongo venezolano.jpg"
import teq from "../images/Comida Venezolana/Tequeños venezolanos de queso.jpg"
import { Footer } from './Footer'

export const Venezolana = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:20}}>

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={are} alt="..." />
                    <h2>AREPA</h2>
                    <p>Un panecillo de masa de maíz, redondo y plano, que se cocina en una parrilla o se hornea. Se puede rellenar con una variedad de ingredientes como queso, jamón, aguacate, pollo o carne mechada, convirtiéndolo en una deliciosa opción para el desayuno o la comida.</p>
                    <p><a className="btn btn-secondary" href="# ">Ver Más &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={cach} alt="..."/>
                    <h2>CACHAPA</h2>
                    <p>Una especie de panqueque grueso elaborado con maíz tierno molido. Se cocina a la parrilla y se sirve generalmente con queso blanco rallado o acompañada de jamón, mantequilla o incluso carne mechada. Es conocida por su sabor dulce y textura suave.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={hal} alt="..."/>
                    <h2>HALLACAS</h2>
                    <p>Una especie de tamal venezolano, las hallacas son paquetes de masa de maíz rellenos de un guiso que puede incluir carne de res, cerdo, pollo, aceitunas, alcaparras y otros ingredientes. Se envuelven en hojas de plátano y se cocinan al vapor</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={mon} alt="..."/>
                    <h2>MONDONGO VENEZOLANO</h2>
                    <p>Un guiso espeso y abundante elaborado con mondongo (callos de res), verduras como zanahorias, papas, maíz y condimentos. Es un plato reconfortante y popular, a menudo acompañado de arepas.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={teq} alt="..."/>
                    <h2>TEQUENOS VENEZOLANOS</h2>
                    <p>Palitos de queso envueltos en una masa de harina de trigo y fritos hasta que estén dorados y crujientes. Son aperitivos populares en celebraciones y eventos, y se sirven comúnmente con salsas como guasacaca (una salsa de aguacate) o alioli.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                
                </div><Footer/>

            </div>
        </center>
    </>
  )
}
