import React from 'react'
import { Link } from 'react-router-dom'
import logo_con_tipografia from '../assets/img/logo_con_tipografia.png'

export default function Home() {
  return (
    <>
{/* Navbar */}
<section className="home__wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark NavHome">
        <div className="container-fluid">
          <img src={logo_con_tipografia} alt="" className="imgInfor" onClick={()=>alert('Bruh 😑')}/>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item linkText"><Link className="nav-link text-light" to="/"><b>Inicio</b></Link></li>
              <li className="nav-item linkText"><Link className="nav-link text-light" to="/Contact"><b>Contacto</b></Link></li>
              <li className="nav-item"><Link className="btn btn-aurum ms-3" to="/Login">Log in</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    <section className="home__container">

      {/* Hero */}
      <section className="hero text-center text-black">
        <div className="container-fluid py-5">
          <h1 className="display-4 fw-bold">Bienvenido a Aurum</h1>
          <p className="lead">Tu herramienta definitiva para el manejo inteligente del dinero.</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 text-center ">
        <div className="container-fluid">
          <h2 className="section-title mb-4">¿Qué ofrece Aurum?</h2>
          <div className="row conte__cardinfor">
            <div className="cardInfor col-3">
              <div className="feature-icon mb-3">💰</div>
              <h5>Gestión de Ahorros</h5>
              <p>Controla tus ahorros en diferentes bolsillos con objetivos personalizados.</p>
            </div>
            <div className=" cardInfor col-3">
              <div className="feature-icon mb-3">📊</div>
              <h5>Reportes Financieros</h5>
              <p>Visualiza tu progreso y hábitos financieros con reportes claros.</p>
            </div>
            <div className=" cardInfor col-3">
              <div className="feature-icon mb-3">🔒</div>
              <h5>Seguridad y Privacidad</h5>
              <p>Tus datos protegidos con los más altos estándares de seguridad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-light text-center col-11">
        <div className="container-fluid">
          <h2>Empieza hoy a tomar control de tus finanzas con nosotros.</h2>
          <Link to="/Register" className="btn btn-aurum btn-lg mt-3">Comenzar</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center bg-dark text-white col-11">
        <div className="container-fluid">
          <p className="mb-0">© 2025 Aurum. Todos los derechos reservados.</p>
        </div>
      </footer>
    </section>
</section>
    </>
  )
}
