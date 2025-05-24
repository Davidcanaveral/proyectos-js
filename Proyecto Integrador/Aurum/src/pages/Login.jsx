import logo_con_tipografia from '../assets/img/logo_con_tipografia.png'
import { Link } from 'react-router-dom'
import React,{ use } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Login({onLogin}) {
   let { register,handleSubmit, formState : { errors } } = useForm();
  let navigate = useNavigate();
  
  return (
    <>  
    <section className="home__wrapper col-12">
        <nav className="navbar navbar-expand-lg navbar-dark NavHome">
            <div className="container-fluid">
            <Link to="/"><img src={logo_con_tipografia} alt="" className="imgInfor"/></Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item linkText"><Link className="nav-link text-light" to="/"><b>Inicio</b></Link></li>
                <li className="nav-item linkText"><Link className="nav-link text-light" to="/Contact"><b>Contacto</b></Link></li>
                <li className="nav-item"><Link className="btn btn-aurum ms-3" to="/Register">Sign in</Link></li>
                </ul>
            </div>
            </div>
        </nav>
        <section className="home__container mt-5 home__container--mod">
            <h4 className="display-4 fw-bold">Ingreso</h4>
            <div className="container container__log">
                <form>
                <div className="mb-3 mt-3">
                    <label for="exampleInputEmail1" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-outline-warning">Ingresar</button>
                </form>
            </div>
            <section className="hero text-center text-black">
        <div className="container-fluid py-5 mt-5">
          <h4 className="display-4 fw-bold">Bienvenido de Nuevo</h4>
          <p className="lead">Tu herramienta definitiva para el manejo inteligente del dinero.</p>
        </div>
      </section>
        </section>
    </section>
    </>
  )
}
