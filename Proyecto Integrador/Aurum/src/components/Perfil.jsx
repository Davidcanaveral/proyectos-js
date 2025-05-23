import React from 'react'
import { Link } from 'react-router-dom'

export default function Perfil() {
  return (
    <>
        <div className="card text-center card__perfil">
            <div className="card-header">
                <h4><b>David caña</b></h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">$20.000.000</h5>
                <p className="card-text">"Ahorros"</p>
                <h6 className="card-title">$2.000.000</h6>
                <br /> 
                <Link to="/PerfilDetail" className="btn btn-outline-dark">Ver Detalle</Link>
            </div>
        </div>
    </>
  )
}
