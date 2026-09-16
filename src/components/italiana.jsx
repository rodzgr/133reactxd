import React from 'react'
import ant from "../images/Comida Italiana/Antipasti.jpg"
import bol from "../images/Comida Italiana/Bolas-de-arroz rellenas.jpg"
import esp from "../images/Comida Italiana/Espaguetis con verduras y pollo.jpg"
import las from "../images/Comida Italiana/Lasana-de-carne-picada.jpg"
import com from "../images/Comida Italiana/Pasta.jpg"
import { Footer } from './Footer'

export const Italiana = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:20}}>

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={ant} alt="..." />
                    <h2>ANTIPASTI</h2>
                    <p>Una selección variada de aperitivos italianos que pueden incluir embutidos, quesos, aceitunas, verduras en vinagre y otros bocados sabrosos. Es comúnmente servido como entrada antes de la comida principal.</p>
                    
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bol} alt="..."/>
                    <h2>BOLAS DE ARROZ RELLENAS</h2>
                    <p>Bolas de arroz rellenas y empanizadas, generalmente rellenas de ragú de carne, guisantes, queso y otros condimentos. Se fríen hasta obtener una capa dorada y crujiente.</p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={esp} alt="..."/>
                    <h2>ESPAGUETIS CON VERDURAS Y POLLO</h2>
                    <p>Espaguetis servidos con una mezcla de verduras salteadas, como pimientos, calabacines y tomates, acompañados de trozos de pollo. Pueden estar sazonados con hierbas frescas y ajo, ofreciendo una opción saludable y deliciosa.</p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={las} alt="..."/>
                    <h2>LASANA DE CARN PICADA</h2>
                    <p>Un platillo en capas que consiste en láminas de pasta intercaladas con carne molida cocida, salsa de tomate, bechamel y queso. Se hornea hasta que la capa superior adquiere un dorado apetitoso.</p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={com} alt="..."/>
                    <h2>PASTA</h2>
                    <p>Un término general que abarca una amplia variedad de formas y estilos de masa de harina y agua, como spaghetti, fusilli, entre otros. Se sirve con una variedad de salsas, desde tomate y albahaca hasta carbonara o boloñesa, y puede incluir ingredientes como mariscos, carne o vegetales, adaptándose a diferentes gustos y preferencias.</p>
                </div>
               
                </div><Footer/>

            </div>
        </center>
    </>
  )
}
