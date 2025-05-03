import { Link } from "react-router-dom"
export default function Aside() {
  return (
    <div className="col-sm-4 container__aside d-flex flex-column align-items-center mb-5">
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div>
          <img className="img-fluid" src={"https://img.freepik.com/premium-photo/chef-giving-thumbs-up-isolated-white-background_1000823-51643.jpg"} alt="" />
        </div>
        <p>soy chef especializado en alta cocina, graduado en la universidad harvard medellin, me apasiona la cocina como jugar futbol.</p>
        <br />
        <h3 className="mt-4">Algunas Categorias</h3>
        <p>Categorias de nuestras recetas</p>
        <ul className="nav nav-pills flex-column  align-items-center">
            <li className="nav-item">
            <Link className="btn btn-outline-primary mt-2" to="/CategoriesP/1">Postres</Link>
            </li>
            <li className="nav-item">
            <Link className="btn btn-outline-primary mt-2" to="/CategoriesP/3">Bebidas</Link>
            </li>
            <li className="nav-item">
            <Link className="btn btn-outline-primary mt-2" to="/CategoriesP/2">Comidas Rápidas</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-primary mt-2" to="/CategoriesP/4">Entradas</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-primary mt-2" to="/CategoriesP/5">Platos Principales</Link>
            </li>
        </ul>
        <hr className="d-sm-none" />
    </div>
  )
}
