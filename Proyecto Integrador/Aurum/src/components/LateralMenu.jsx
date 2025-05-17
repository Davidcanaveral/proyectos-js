import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import Perfil from './Perfil'

export default function LateralMenu() {
  return (
    <>
    <nav id="" className="navbar mb-3 navbar-lateral">
        <a className="" href="#"><img src={logo} alt="" className="image__logo"/></a>
            <div className="separador">

            </div>
        <div className="contenidoPerfil">
            <div className="ContPerfil">
                <Perfil />
            </div>
            <br />
            <div className="fraseCont text-center">
                <p className="fraseTexto text-dark mb-5">
                    "Motivate a ahorrar con Nosotros"
                </p>
                <div className="separador">
                
            </div>
            </div>
        </div>
    </nav>
    </>
  )
}
