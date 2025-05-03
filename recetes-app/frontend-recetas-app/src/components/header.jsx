import "./../assets/estilos.css";
export default function Header() {
  return (
    <div className="p-5 bg-primary text-white text-center">
        <h1>
            <img className="logo" src={"https://png.pngtree.com/png-clipart/20221019/original/pngtree-master-chef-logo-illustration-png-image_8703909.png"} alt="" />
            Restaurante Don Pepito</h1>
        <p>Las Mejores en recetas y postres</p> 
    </div>
  )
}
