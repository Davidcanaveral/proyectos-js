import NavBar from "../components/NavBar"
import LateralMenu from "../components/LateralMenu"
import { Link } from "react-router-dom"



export default function PerfilDetail() {
  return (
    <>
        <div className="app-container--mod" style={{display: 'flex',flexDirection: "column", alignItems: 'center'  ,height: '100vh', width: '100vw'}}>
            <NavBar />
                <h4 className="display-4 fw-bold col-1">Perfil</h4>
                <main className="container-fluid mt-5">
                <div className="container-fluid cont__Cart--mod">
                    <div className=" mt-3 mb-3 carta__bolsi--mod">
                        <div className="carta__bolsi_bod--mod">
                            <h3 className="card-title mt-5">Tu Nombre </h3>
                            <h4 className="card-subtitle mb-2 mt-3 text-warning">saldo</h4>
                            <h5 className="card-subtitle mt-2">motivo</h5>
                            <h4 className="card-subtitle mb-2 mt-3 text-warning">salario</h4>
                            <Link to="/" className="btn btn-outline-dark mt-5 ">Editar</Link>
                        </div>
                    </div>
                </div>
             </main>
        </div>
    </>
  )
}
