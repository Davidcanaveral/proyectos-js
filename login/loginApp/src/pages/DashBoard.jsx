import React from 'react'

export default function DashBoard({user,log}) {
  return (
    <>
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-sm-6">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li> 
        </ul>
        </div>
        <div className="col-sm-6">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link"> <span className="btn btn-danger" onClick={log}>Log out </span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <h1 className="text-primary">Bienvenido {user}</h1>
    </>
  )
}
