import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Menu() {
  return (
    <nav className="menu-index"  >
    <div className="container-fluid">
      <ul className="navbar-nav menu__index__lista">
        <li className="nav-item" id="nav_inic">
          <Link className="nav-link active" id="nav_inic_a" to="/">INICIO</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CATEGORÍAS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">ENSALADAS Y ALIÑOS</a></li>
            <li><a className="dropdown-item" href="#">ENTRANTES Y TAPAS</a></li>
            <li><a className="dropdown-item" href="#">MASAS Y PANES</a></li>
            <li><a className="dropdown-item" href="#">ARROCES</a></li>
            <li><a className="dropdown-item" href="#">PASTAS</a></li>
            <li><a className="dropdown-item" href="#">HUEVOS</a></li>
            <li><a className="dropdown-item" href="#">SOPAS Y CREMAS</a></li>
            <li><a className="dropdown-item" href="#">VERDURAS</a></li>
            <li><a className="dropdown-item" href="#">LEGUMBRES Y COCIDOS</a></li>
            <li><a className="dropdown-item" href="#">PESCADOS Y MARISCOS</a></li>
            <li><a className="dropdown-item" href="#">CARNE</a></li>
            <li><a className="dropdown-item" href="#">POLLO Y AVES</a></li>
            <li><a className="dropdown-item" href="#">SALSAS Y GUARNICIONES</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">RECETAS DE FREIDORA DE AIRE</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOG
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">CUADENO DE COCINA</a></li>
            <li><a className="dropdown-item" href="#">IDEAS Y MENUS</a></li>
            <li><a className="dropdown-item" href="#">TRUCOS Y TECNICAS DE COCINA</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">VIDEO RECETAS</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            RECETAS DE TEMPORADA
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">RECETAS DE SEMANA SANTA</a></li>
            <li><a className="dropdown-item" href="#">RECETAS DE PRIMAVERA</a></li>
            <li><a className="dropdown-item" href="#">RECETAS DE VERANO</a></li>
            <li><a className="dropdown-item" href="#">RECETAS DE OTOÑO</a></li>
            <li><a className="dropdown-item" href="#">RECETAS DE INVIERNO</a></li>
            <li><a className="dropdown-item" href="#">RECETAS PARA HALLOWEEN</a></li>
            <li><a className="dropdown-item" href="#">RECETAS PARA NAVIDAD</a></li>
          </ul>
        </li>
      </ul>
      <Link to="/" className="search">
        <i className="fa fa-search"></i>
      </Link>
    </div>
  </nav>
 
  )
}
