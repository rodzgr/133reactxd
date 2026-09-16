import React from 'react'
import arr from "../images/Comida Colombiana/Arroz chino al estilo colombiano.jpg"
import ban from "../images/Comida Colombiana/Bandeja Paisa.jpg"
import car from "../images/Comida Colombiana/Carne a la parrilla.jpg"
import pic from "../images/Comida Colombiana/Picada casera.jpg"
import tos from "../images/Comida Colombiana/Tostones.jpg"
import { Footer } from './Footer'

export const Colombiana = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:20}}>

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={arr} alt="..." />
                    <h2>ARROZ CHINO AL ESTILO COLOMBIANO</h2>
                    <p>Una fusión única de la tradicional receta de arroz chino con influencias colombianas, caracterizada por sabores locales y la inclusión de ingredientes como plátano maduro, carne, huevos y condimentos criollos.</p>
                    <p><a className="btn btn-secondary" href="# ">Ver Más &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={ban} alt="..."/>
                    <h2>BANDEJA PAISA</h2>
                    <p>Un plato emblemático de la región paisa en Colombia, la Bandeja Paisa es una generosa combinación de arroz, frijoles, carne molida, chicharrón, huevo frito, aguacate y plátano, ofreciendo una experiencia culinaria abundante y variada.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={car} alt="..."/>
                    <h2>CARNE A LA PARRILLA</h2>
                    <p>Jugosos cortes de carne, sazonados y asados a la parrilla para resaltar su sabor natural. Este plato se disfruta con acompañamientos como papas, arepas, guacamole y salsas criollas, creando una experiencia gastronómica deliciosa y satisfactoria.
</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={pic} alt="..."/>
                    <h2>PICADA CASERA</h2>
                    <p>Una mezcla de bocados y aperitivos caseros que conforman una "picada" colombiana. Puede incluir carnes frías, quesos, empanadas, arepas, y otros elementos como guacamole, salsas y aceitunas. Es ideal para compartir y disfrutar en reuniones informales.
</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={tos} alt="..."/>
                    <h2>TOSTONES</h2>
                    <p>Trozos de plátano verde que se aplastan y fríen hasta obtener una textura crujiente por fuera y suave por dentro. Los tostones son una guarnición popular en la cocina latinoamericana y pueden servirse con salsas, guacamole o como acompañamiento de diversos platos</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
              
                </div><Footer/>

            </div>
        </center>
    </>
  )
}
