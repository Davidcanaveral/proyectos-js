import Home from "./pages/Home"
import Dashboard from "./pages/dashboard"
import { Routes,Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PerfilDetail from "./pages/PerfilDetail"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} /> 
        <Route path="/PerfilDetail" element={<PerfilDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App  
