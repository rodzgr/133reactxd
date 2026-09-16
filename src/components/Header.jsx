import React from 'react'

import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header style={{color:"black"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                

                <h2>RESTAURANTE CAIMAN DEL ORIENTE</h2>
                
                

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <h4><NavLink to="/principal" className="nav-item nav-link text-center" style={{color:"yellow"}}>PRINCIPAL</NavLink></h4>
                        <h4><NavLink to="/boli" className="nav-item nav-link text-center" style={{color:"white"}}>COMIDA BOLIVIANA</NavLink></h4>
                        <h4><NavLink to="/mexi" className="nav-item nav-link text-center" style={{color:"yellow"}}>COMIDA MEXICANA</NavLink></h4>
                        <h4><NavLink to="/japo" className="nav-item nav-link text-center" style={{color:"white"}}>COMIDA JAPONESA</NavLink></h4>
                        <h4><NavLink to="/colom" className="nav-item nav-link text-center" style={{color:"yellow"}}>COMIDA COLOMBIANA</NavLink></h4>
                        <h4><NavLink to="/venez" className="nav-item nav-link text-center" style={{color:"white"}}>COMIDA VENEZOLANA</NavLink></h4>
                        <h4><NavLink to="/espa" className="nav-item nav-link text-center" style={{color:"yellow"}}>COMIDA ESPANOLA</NavLink></h4>
                        <h4><NavLink to="/ita" className="nav-item nav-link text-center" style={{color:"white"}}>COMIDA ITALIANA</NavLink></h4>
                          
                        <h4><NavLink to="/acercade" className="nav-item nav-link text-center" style={{color:"white"}}>INFORMACION DE DESARROLADOR</NavLink></h4>
                        <h4><NavLink to="/mensajes" className="nav-item nav-link text-center" style={{color:"yellow"}}>MENSAJES</NavLink></h4>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}
