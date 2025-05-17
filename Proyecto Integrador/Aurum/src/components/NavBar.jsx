import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
        <nav id="navbar-example2" className="navbar px-3 mb-3 NavbarPrin">
            <ul className="nav nav-pills">
                <li className="">
                <a className="nav-link text-dark linkText" href="#scrollspyHeading1"><b>Inicio</b></a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-dark linkText" href="#scrollspyHeading2"><b>Información</b></a>
                </li>
                <li className="nav-item dropdown">
                </li>
            </ul>
          <div className="navbar-brand Cont__demas">
            <div className="redes">
              <a href="https://facebook.com" target="_blank" className="text-decoration-none text-dark">
                <i className="bi bi-facebook fs-5 icono"></i>
              </a>
              <a href="https://instagram.com" target="_blank" className="text-decoration-none text-dark">
                <i className="bi bi-instagram fs-5 icono"></i>
              </a>
              <a href="https://twitter.com" target="_blank" className="text-decoration-none text-dark">
                <i className="bi bi-twitter fs-5 icono"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-decoration-none text-dark">
                <i className="bi bi-linkedin fs-5 icono"></i>
              </a>
            </div>
            <a className="nav-link text-dark link_logout" href="#"><small>Log Out</small></a>
          </div>
        </nav>
    </>
  )
}
