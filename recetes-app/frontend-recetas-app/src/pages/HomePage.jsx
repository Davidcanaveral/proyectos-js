import Header from "../components/header"
import Menu from "../components/menu"
import Aside from "../components/aside"
import Content from "../components/content"
import Contact from "../components/Contact"
import Footer from "../components/footer"


export default function HomePage() {
  return (
      <>
          <Header />
          <Menu />
          <div class="container mt-5">
            <div class="row container_content">
              <Aside />
              <Content />
            </div>
          </div>
          <Contact />
          <Footer />
        </>
  )
}
