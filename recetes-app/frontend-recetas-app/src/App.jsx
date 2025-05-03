import { Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import AboutPage from "./pages/AboutPage"
import CategoriesPage from "./pages/CategoriesPage"
import ContactPage from "./pages/ContactPage"
import RecetasDetailPage from "./pages/RecetasDetailPage"
import CategoriasDetail from "./pages/categoriasDetail"

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Categories" element={<CategoriesPage />} />
      <Route path="/Recetes/:id" element={<RecetasDetailPage />} />
      <Route path="/CategoriesP/:id" element={<CategoriasDetail />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
     </Routes>
    </>
  ) 
}

export default App
