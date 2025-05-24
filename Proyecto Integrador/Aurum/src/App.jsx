import Home from "./pages/Home"
import Dashboard from "./pages/dashboard"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PerfilDetail from "./pages/PerfilDetail"
import Contact from "./pages/Contact"
import { Routes,Route,Navigate } from "react-router-dom"
import { useState,useEffect } from "react"
function App() {
    let  [isAllowed, setIsAllowed] = useState(localStorage.getItem('isAllowed') === 'true');
    let  [userName, setUserName] = useState(localStorage.getItem('userName') || '');

    useEffect(() => {
      localStorage.setItem('isAllowed', isAllowed);
      localStorage.setItem('userName', userName);

    },[isAllowed,userName]);

    let handlerLogin = (userName) => {
      setIsAllowed(true);
      setUserName(userName);
    }

  let handlerLogout = () => {
    setIsAllowed(false);
    setUserName('');
    localStorage.removeItem('isAllowed');
    localStorage.removeItem('userName');
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={isAllowed ? <Dashboard user={userName} log={handlerLogout} /> : <Navigate to="/" />} />
        <Route path="/Login" element={isAllowed ? <Navigate to="Dashboard"/> : <Login onLogin={handlerLogin} />} />
        <Route path="/Register" element={isAllowed ? <Navigate to="Dashboard"/> : <Register onLogin={handlerLogin} /> } /> 
        <Route path="/PerfilDetail" element={isAllowed ? <PerfilDetail user={userName} /> : <Navigate to="/" />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Notfound onLogin={handlerLogin} />} />
      </Routes>
    </>
  )
}

export default App  
