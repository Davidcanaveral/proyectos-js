import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <ul className="navbar-nav justify-content-between">
            <li className="nav-item">
                <Link className="nav-link active" to="/">HOME</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Categories">CATEGORIES</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/About">ABOUT</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Contact">CONTACT</Link>
            </li>
            </ul>
            <div class="input-group has-validation align-self-end w-25">
                <span class="input-group-text" id="inputGroupPrepend">🔎</span>
                <input type="text" class="form-control bg-secondary" id="validationCustomUsername" required />
            </div>
        </div>
    </nav>
  )
}
