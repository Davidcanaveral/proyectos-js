import React from 'react'

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
                <a href="#" className="btn btn-outline-warning">Ver Detalle</a>
            </div>
        </div>
    </>
  )
}
