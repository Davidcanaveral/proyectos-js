import Login from "./pages/Login"
import Register from "./pages/Register"
import DashBoard from "./pages/DashBoard"
import Notfound from "./pages/Notfound"
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
        <Route path="/login" element={isAllowed ? <Navigate to="/dashboard" /> : <Login onLogin={handlerLogin} />} />
        <Route path="/register" element={isAllowed ? <Navigate to="/dashboard" /> : <Register onLogin={handlerLogin} />} />
        <Route path="/dashboard" element={isAllowed ? <DashBoard user={userName} log={handlerLogout} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Notfound onLogin={handlerLogin}/>} />
      </Routes>
    </>
  )
}

export default App
