import NavBar from "./components/NavBar"
import LateralMenu from "./components/LateralMenu"
import Cartera from "./components/cartera"
import Graficos from "./components/Graficos"
function App() {
  return (
    <>
    <div className="app-container" style={{display: 'flex', height: '100vh', width: '100vw'}}>
      <LateralMenu />
      <div className="contenedor-derecho">
        <NavBar />
        <main className="contenido-principal">
          <Cartera />
          <Graficos />
        </main>
      </div>
    </div>

    </>
  )
}

export default App
