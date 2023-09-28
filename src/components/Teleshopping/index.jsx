import "./styles.css";

import womanImg from "../../assets/pics/pic-woman-2.png";
import Button from "../../shared/Button";

function Teleshopping() {
  return (
    <section>
      <img src={womanImg} alt="" role="presentation" />
      <Button>Acione nosso televendas</Button>
    </section>
  )
}

export default Teleshopping