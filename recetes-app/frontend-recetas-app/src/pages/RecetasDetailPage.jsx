import { useParams } from "react-router-dom"
import Menu from "../components/menu";
import Footer from "../components/footer";
import Contact from "../components/Contact";
import axios from "axios";
import { useEffect , useState } from "react";

export default function RecetasDetailPage() {
  let { id } = useParams();
  let [recepesApi, setRecepesApi] = useState([]);
  async function getRecepes(){
      try{
        let answer = await axios.get("http://localhost:3001/api/recetas/"+id);
        console.log(answer.data);
        setRecepesApi(answer.data);
      }catch(e){
        console.log(e);
      }
  }
  useEffect(()=>{
    getRecepes();
  },[])


  return (
    <>
      <Menu />
        <div className="container__cardReceta mt-3">
          <h2 className="TitleCard mt-4 mb-4">{recepesApi.receta_nombre}</h2>
          <h5 className="subTilte">{recepesApi.categoria}</h5>
          <div className="ImegenReceta mt-4">
            <img src={recepesApi.imagen} alt="image" className="imagePhoto"/>
          </div>
          <p className="mt-3">Chef: {recepesApi.autor}</p>
          <p className="col-5 mt-2"><b>Ingredientes: </b>{recepesApi.ingredientes} </p>
        </div>
        <Contact />  
      <Footer />
    </>
  )
}
