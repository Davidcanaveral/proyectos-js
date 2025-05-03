import React from 'react'

export default function Contact() {
  return (
    <>
    <section className="container__Contact mt-5">
        <div className="mt-4 container__Contact__ContTitle">
            <h2 className="container__Contact__ContCont__tex m-5">Contactanos</h2>
        </div>
        <div className="mb-3 container__Contact__emailCont">
            <label for="exampleFormControlInput1" className="form-label">Tu Correo</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Chef@Gmail.com"/>
        </div>
            <div className="mb-3 container__Contact__textCont">
            <label for="exampleFormControlTextarea1" className="form-label">Comentarios</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Me encantó tu cocina..."></textarea>
        </div>
        <div className="mt-4 mb-5 container__Contact__ContCont">
            <p className="container__Contact__ContCont__text">¿Quieres saber más sobre nosotros? Escribe: <a href="dcanaveral4.5@Gmail.com">dcanaveral4.5@Gmail.com</a></p>
        </div>
    </section>
    </>
  )
}
