import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function Register() {
  let { register,handleSubmit, watch,formState : { errors } } = useForm();
  let contra = watch("contrasena");
    let navigate = useNavigate();
    let onSubmited = async ( data ) => {
      console.log(data);
      try{
        let respuesta = await axios.post("http://localhost/loginApi/register",{
          nombre: data.nombre,
          correo: data.correo,
          contrasena: data.contrasena
        });
        alert("Bienvenido "+respuesta.data.message);
        navigate("/login");
        console.log(respuesta);
      }catch(error){
        console.log(error);
      }
    };


  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <h1 className="text-center text-primary my-5">Formulario de Registro</h1>
          </div>
          <div className="col-sm-8">
          <form onSubmit={handleSubmit(onSubmited)} className="bg-body-tertiary p-5 rounded">
          <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">User Name</label>
              <input type="text" {...register("nombre",{required: true})} className="form-control" />
              <br />
              {errors.nombre && <p className="text-danger">Debes escribir tu nombre. </p>}
            </div>
            {/* <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" {...register("correo",{required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <br />
              {errors.correo && <p className="text-danger">Debes escribir un correo </p>}
            </div> */}
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" {...register("correo",{required: true})} className="form-control" i/>
              <br />
              {errors.correo && <p className="text-danger">Debes escribir un correo </p>}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" {...register("contrasena",{required: true})} className="form-control" />
              <br />
              {errors.contrasena && <p className="text-danger">La constraseña es obligatoria </p>}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
              <input type="password" {...register("confirmar_contrasena",{required: "por favor digita una contraseña", validate:(value)=> value === contra || "La contraseña no coincide"})} className="form-control" />
              <br />
              {errors.confirmar_contrasena && <p className="text-danger">{errors.confirmar_contrasena.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Log In </button>
          </form>
          </div>
        </div>
      </div>
      </>
  )
}
