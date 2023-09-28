import "./styles.css";

import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

import logo from "../../assets/logo/logo-light.png";
import nowebIcon from "../../assets/icon-noweb.png";

function Footer() {
  return (
    <footer>
      <section>
        <div>
          <img src={logo} alt="Logo Elétrica J. Santos" />
          <p>Venha na Elétrica J. Santos e garanta a melhor opção para sua casa!</p>
        </div>
        <div>
          <h3>Nos siga nas redes</h3>
          <div>
            <BsWhatsapp />
            <BsInstagram />
            <BsFacebook />
          </div>
        </div>
      </section>
      <section>
        <div>
          &copy; Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados
        </div>
        <div>
          Desenvolvido por <img src={nowebIcon} alt="logo Noweb" />
        </div>
      </section>
    </footer>
  )
}

export default Footer