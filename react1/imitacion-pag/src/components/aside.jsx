import React from 'react'

export default function Aside() {
  return (
    <div className="col-sm-8 contAside">
      <h2 className="titAside">Divina Cocina – Recetas Fáciles</h2>
      <div className="Realimg"><img src="https://www.divinacocina.es/wp-content/uploads/2025/04/ensalada-de-sepia-vv-1.jpg" alt="" /></div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3 className="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <hr className="d-sm-none"/>
    </div>
  );
}
