import "./styles.css";

import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

import logo from "../../assets/logo/logo-light.png";
import nowebIcon from "../../assets/icon-noweb.png";

function Footer() {
  return (
    <footer className="footer">
      <section className="contact">
        <div>
          <img src={logo} alt="Logo Elétrica J. Santos" />
          <p>Venha na Elétrica J. Santos e garanta a melhor opção para sua casa!</p>
        </div>
        <div>
          <p className="text-follow">Nos siga nas redes</p>
          <div className="social-links">
            <a href="#">
              <BsWhatsapp className="icon" />
            </a>
            <a href="#">
              <BsInstagram className="icon" />
            </a>
            <a href="#">
              <BsFacebook className="icon" />
            </a>
          </div>
        </div>
      </section>
      <section className="info">
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