import { useParams } from "react-router-dom"
import Menu from "../components/menu";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect , useState } from "react";
import Card from "../components/card";

export default function CategoriasDetail() {
    let { id } = useParams();
    let [recepesApi, setRecepesApi] = useState([]);
    async function getRecepes(){
        try{
          let answer = await axios.get("http://localhost:3001/api/recetas/categoria/"+id);
          console.log(answer.data);
          setRecepesApi(answer.data);
        }catch(e){
          console.log(e);
        }
    }   
    useEffect(()=>{
        getRecepes();
    },[id])

  return (
    <>
    <Menu />
    <div className="row mt-5">
        <div className="col-sm-4 container__aside d-flex flex-column align-items-center mb-5" id="asideCategoria">
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
        <div className="col-sm-8 ">
            {
                recepesApi.map((r, i)=>(<Card key={i} recetas={r}  />))
            }
        </div>
    </div>    
            <Footer />
    </>
  )
}
