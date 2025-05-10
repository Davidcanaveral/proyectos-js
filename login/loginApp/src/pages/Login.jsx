import React, { use } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login({onLogin}) {
  let { register,handleSubmit, formState : { errors } } = useForm();
  let navigate = useNavigate();
  let onSubmited = async ( data ) => {

    console.log(data);
    try{
      let respuesta = await axios.post("http://localhost/loginApi/login",data);
      alert("Bienvenido "+respuesta.data.nombre);
      onLogin(respuesta.data.nombre);
      navigate("/dashboard");
      console.log(respuesta);
    }catch(error){
      console.log(error);
      alert("usuario o contraseña incorrecta");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <h1 className="text-center text-primary my-5">Formulario de Ingreso</h1>
          </div>
          <div className="col-sm-8">
          <form onSubmit={handleSubmit(onSubmited)} className="bg-body-tertiary p-5 rounded">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" {...register("correo",{required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <br />
              {errors.correo && <p className="text-danger">Debes escribir un correo </p>}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" {...register("contrasena",{required: true})} className="form-control" id="exampleInputPassword1"/>
              <br />
              {errors.contrasena && <p className="text-danger">La constraseña es obligatoria </p>}
            </div>
            <button type="submit" className="btn btn-primary">Log In </button>
          </form>
          </div>
        </div>
      </div>
    </>
    
  )
}
