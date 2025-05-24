import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
        <nav id="navbar-example2" className="navbar px-3 mb-3 NavbarPrin">
            <ul className="nav nav-pills">
                <li className="">
                <Link className="nav-link linkText" to="/Dashboard"><b>Menu</b></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link linkText" to="/Contact"><b>Contacto</b></Link>
                </li>
                <li className="nav-item dropdown">
                </li>
            </ul>
          <div className="navbar-brand Cont__demas">
            <div className="redes">
              <a href="https://facebook.com" target="_blank" className="text-decoration-none icono">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://instagram.com" target="_blank" className="text-decoration-none icono">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://twitter.com" target="_blank" className="text-decoration-none icono">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-decoration-none icono">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
            <Link className="nav-link text-dark link_logout" to="/"><small>Log Out</small></Link>
          </div>
        </nav>
    </>
  )
}
