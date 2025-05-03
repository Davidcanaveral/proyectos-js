import Card from "./card";
import axios from "axios";
import { use } from "react";
import { useEffect , useState } from "react";

let datos = [
  {
    "id":1,
    "titulo": "TITLE HEADING 1",
    "descripcion": "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    "imagen": "https://tse1.mm.bing.net/th/id/OIP.oYnuPJquiYU5yXdqu2yaRQHaEK?rs=1&pid=ImgDetMain",
    "fecha" : "Title description, Dec 7, 2020"
  },
  {
    "id":2,
    "titulo": "TITLE HEADING 2",
    "descripcion": "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    "imagen": "https://i.blogs.es/6549f1/ensalada_de_fruta/1366_2000.jpeg",
    "fecha" : "Title description, Dec 10, 2021"
  },
  {
    "id":3,
    "titulo": "TITLE HEADING 3",
    "descripcion": "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    "imagen": "https://www.annarecetasfaciles.com/files/principal-1-scaled.jpg",
    "fecha" : "Title description, Dec 15, 2022"
  }
]
export default function Content() {
  let [recepesApi, setRecepesApi] = useState([]);
  async function getRecepes(){
      try{
        let answer = await axios.get("http://localhost:3001/api/recetas");
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
    <div className="col-sm-8 " style={{ "overflow-y":" auto"}}>
      {
        recepesApi.map((r, i)=>(<Card key={i} recetas={r}  />))
      }
    </div>
  )
}
