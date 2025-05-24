import React from 'react'
import { Link } from 'react-router-dom'
import logo_con_tipografia from '../assets/img/logo_con_tipografia.png'

export default function Contact() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark NavHome">
            <div className="container-fluid">
            <Link to="/"><img src={logo_con_tipografia} alt="" className="imgInfor"/></Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item linkText"><Link className="nav-link text-light" to="/"><b>Inicio</b></Link></li>
                <li className="nav-item linkText"><Link className="nav-link text-light" to="/Contact"><b>Contacto</b></Link></li>
                <li className="nav-item"><Link className="btn btn-aurum ms-3" to="/Login">Log In</Link></li>
                </ul>
            </div>
            </div>
        </nav>
        <div className="container__contactSect">
                <div className="mt-4 container__Contact__ContTitle">
                    <h2 className="container__Contact__ContCont__tex mt-5">Contactanos</h2>
                </div>
            <section className="container__Contact mt-4">
                <div className="mb-3 container__Contact__emailCont">
                    <h3 for="exampleFormControlInput1" className="form-label">Tu Correo</h3>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre@Gmail.com"/>
                </div>
                    <div className="mb-3 container__Contact__textCont">
                    <h3 for="exampleFormControlTextarea1" className="form-label">Comentarios</h3>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Me encantó la app..."></textarea>
                </div>
                <div className="mt-4 mb-5 container__Contact__ContCont">
                    <p className="container__Contact__ContCont__text">¿Quieres saber más sobre nosotros? Escribe: <a href="dcanaveral4.5@Gmail.com">dcanaveral4.5@Gmail.com</a></p>
                <button type="submit" className="btn btn-outline-warning">Enviar</button>
                </div>
            </section>
        </div>
    </>
  )
}
