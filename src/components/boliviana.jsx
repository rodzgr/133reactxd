import React from 'react'
import char from "../images/Comida Boliviana/Charquecan orureño.jpg"
import fri from "../images/Comida Boliviana/Fricase.jpg"
import pla from "../images/Comida Boliviana/Plato paceño.jpg"
import sil from "../images/Comida Boliviana/Silpancho.jpg"
import sop from "../images/Comida Boliviana/Sopa de mani.jpg"
import { Footer } from './Footer'

export const Boliviana = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:20}}>

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={char} alt="..." />
                    <h2>CHARQUECAN ORURENO</h2>
                    <p>El charquekan orureño tiene sus antecedentes dentro de la comunidad de los Urus, y se popularizó entre los mineros orureños debido a que el charque no se hecha a perder con facilidad, se lo conocía como charque de llama con mote.</p>
                    <p><a className="btn btn-secondary" href="# ">Ver Más &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={fri} alt="..."/>
                    <h2>FRICASE</h2>
                    <p>El fricase de cerdo paceño es un plato fuerte y muy condimentado que goza de la reputación popular de ser ideal para curar la resaca. Esta deliciosa preparación boliviana combina tiernos trozos de cerdo con una variedad de ingredientes y especias que le otorgan su sabor característico.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={pla} alt="..."/>
                    <h2>PLATO PASENO</h2>
                    <p>El Plato paceño está siempre presente en los festejos de homenaje a La Paz. Se lo sirve luego de la tradicional sopa de Chairo. Originalmente, es un plato vegetariano, pero con el pasar de los años, en algunos hogares, se fue incorporando un asado de carne de res a esta receta.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={sil} alt="..."/>
                    <h2>SILPANCHO</h2>
                    <p>El sillpancho, o silpancho es un plato típico de la cocina boliviana,​ particularmente del departamento de Cochabamba, donde es considerado una de sus preparaciones más representativas.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={sop} alt="..."/>
                    <h2>SOPA DE MANI</h2>
                    <p>Este caldo ligero es muy versátil, aunque el ingrediente principal es el maní, puedes variar las verduras, la proteína y el carbohidrato dependiendo de lo que tienes a mano. Puedes servirlo como primer plato o como plato principal si le agregas algunos ingredientes extras como más arroz, o fideos.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div><Footer/>
               
                </div>

            </div>
        </center>
    </>
  )
}
