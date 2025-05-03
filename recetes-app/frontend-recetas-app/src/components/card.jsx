import { Link } from "react-router-dom"
export default function Card({recetas}) {
  return (
    <>
      <div className="my-3 mt-5 lineCard">
        <h2 className="TitleCard mt-2">{recetas.receta_nombre}</h2>
          <h5>{recetas.categoria}</h5>
          <div className="ImegenReceta">
            <Link to={`/Recetes/${recetas.receta_id}`}>
              <img src={recetas.imagen} width="100%" className="imagePhoto"/>
            </Link>
          </div>
          <p className="mt-3">{recetas.ingredientes}</p>
          <p>Receta por: {recetas.autor}</p>
          <Link to={`/Recetes/${recetas.receta_id}`} className="btn btn-primary">Ver Receta</Link>
      </div>
    </>
  )
}
