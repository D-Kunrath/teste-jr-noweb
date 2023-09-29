import "./styles.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import Button from "../../shared/Button";
import IconHolder from "../../shared/IconHolder";
import { highlightImages } from "../../assets";
import womanImg from "../../assets/pics/pic-woman-1.png";
import Rating from "../../shared/Rating";

function Landing() {
  return (
    <section>
      <div>
        <h2>Ilumine o seu dia a dia!</h2>
        <p>
          Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia!
          Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!
        </p>
        <Button>Veja nossos produtos</Button>
        <Button color="none">Nos conheça melhor</Button>
        <a href="#">
          <AiOutlineArrowDown /> Role para ver mais
        </a>
      </div>
      <div>
        <img src={womanImg} alt="" role="presentation" />
        <IconHolder iconName="priceTag" />
        <img src={highlightImages.coverImg} alt="luminária suspensa" />
        <Rating rating={5} />
      </div>
    </section>
  )
}

export default Landing;