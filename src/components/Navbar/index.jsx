import { useState } from "react";

import "./styles.css";
import logo from "../../assets/logo/logo-dark.png";
import Button from "../../shared/Button";
import { MdExpandMore } from "react-icons/md";
import MenuDropDown from "../MenuDropDown";

function Navbar() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  }

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
          <li className="link expansive" onClick={toggleDropdown}>
            Categorias <MdExpandMore className="expand-icon" />
            <MenuDropDown className="dropdown-menu" isOpen={isOpenDropdown} />
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
    </header>
  )
}

export default Navbar;