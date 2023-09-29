import logo from "../../assets/logo/logo-dark.png"
import Button from "../../shared/Button";
import { MdExpandMore } from "react-icons/md";
import MenuDropDown from "../MenuDropDown";

function Navbar() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo Elétrica J. Santos" />
      </div>
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            Categorias <MdExpandMore />
          </li>
          <li>
            Sobre
          </li>
          <li>
            Localização
          </li>
          <li>
            <Button color="secondary">Contato</Button>
          </li>
        </ul>
      </nav>
      <MenuDropDown />
    </header>
  )
}

export default Navbar;