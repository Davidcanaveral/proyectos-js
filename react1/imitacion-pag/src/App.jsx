import Header from "./components/header";
import Menu from "./components/menu";
import Aside from "./components/aside";
import Content from "./components/content";
import Footer from "./components/footer";
import Redes from "./components/redes";
import Precontent from "./components/Precontent"

function App() {
  return (
    <>
      <section className='Cont__principal'>
      <Redes />
      <Header />
      <Menu />
      <Precontent />
      <div className="container mt-5">  
        <div className="row">
          <Aside />
          <Content />
        </div>
      </div>
      </section>
      <section className="Cont__footer">

      </section>
      <Footer />

    </>
  );
}

export default App
