import React from 'react'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'
import YouTubeVideo from './video'

export const ContentHome = () => {
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                <img src={card1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Fideos de arroz con salteado de tofu y pimiento</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Ingredientes
Para 2 personas
Fideos de arroz
120 g
Tofu firme
200 g
Pimiento rojo
1
Jengibre fresco trocito
1
Salsa de soja
15 ml
Curry molido media cucharadita
Ajo granulado cuarto de cucharadita
Cúrcuma molida una cucharadita
Lima
1
Pimienta negra molida
Sal
Aceite de oliva virgen extra
Perejil fresco o cilantro
Cómo hac</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={card2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Revuelto vegano de tofu</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Ingredientes. 250 g de tofu firme, 1/2 cebolla roja, 1 tallo de apio, 1 trocito de jengibre, 1/2 cucharadita de concentrado de tomate, 1/2 cucharadita de cúrcuma molida, 1/4 cucharadita de comino molido, 1 pizca de pimentón dulce o picante, 1 chorrito de vino blanco, ralladura de limón, un poco de agua, pimienta negra, sal, perejil o cilantro fresco, aceite de oliva virgen extra.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={card3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Curry de garbanzos con mango</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Ingredientes. 300 g de garbanzos cocidos, 2 dientes de ajo, 1 cebolleta pequeña, 2 g de cilantro en grano, 2 g de comino en grano, 1 hoja de curry o de laurel, 2 guindillas frescas pequeñas (al gusto), 1 puerro pequeño y fino, 1 zanahoria pequeña, 1 apio pequeño, 5 g de mezcla de curry molido, 1 mango maduro, 200 g de leche de coco o “nata” de avena de cocina, 5 ml de zumo de limón, perejil fresco o cilantro, pimineta negra, sal y aceite de oliva.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
