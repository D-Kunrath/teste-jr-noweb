import "./styles.css";

import womanImg from "../../assets/pics/pic-woman-2.png";
import Button from "../../shared/Button";

function Teleshopping() {
  return (
    <section className="teleshopping">
      <div>
        <img src={womanImg} alt="" role="presentation" />
        <Button>Acione nosso televendas</Button>
      </div>
    </section>
  )
}

export default Teleshopping