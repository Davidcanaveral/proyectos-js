import Menu from "../components/menu"
import Footer from "../components/footer"
import Aside from "../components/aside"
import Content from "../components/content"
export default function AboutPage() {
  return (
    <>
        <Menu />
        <div className="container mt-5">
            <div className="row">
                <Aside />
                <Content />
            </div>
        </div>  
        <Footer />
    </>
  )
}
