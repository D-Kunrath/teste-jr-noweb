import "./styles.css";
import logo from "../../assets/logo/logo-dark.png";
import Button from "../../shared/Button";
import { MdExpandMore } from "react-icons/md";
import MenuDropDown from "../MenuDropDown";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Elétrica J. Santos" />
      </div>
      <nav className="navbar">
        <ul className="links">
          <li className="link active">
            Home
          </li>
          <li className="link">
            Categorias <MdExpandMore className="expand-icon" />
          </li>
          <li className="link">
            Sobre
          </li>
          <li className="link">
            Localização
          </li>
          <li className="link">
            <Button color="secondary" size="md">Contato</Button>
          </li>
        </ul>
      </nav>
      <MenuDropDown className="dropdown" />
    </header>
  )
}

export default Navbar;