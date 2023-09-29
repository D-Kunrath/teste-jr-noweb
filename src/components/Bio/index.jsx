import "./styles.css";
import Button from "../../shared/Button";
import IconHolder from "../../shared/IconHolder";

import storeImg from '../../assets/pics/pic-store.png';

function Bio() {
  return (
    <section className="bio">
      <h2>Sua melhor opção</h2>
      <div>
        <div className="photo">
          <img src={storeImg} alt="Frente da loja Elétrica J. Santos" />
          <IconHolder iconName="thumbsUp" size="lg" />
        </div>
        <div className="text">
          <p>
            Desde 1970 somos especializados em materiais elétricos, sendo uma das principais distribuidoras do setor.
            Oferecemos os melhores produtos, com o preço que cabe no seu bolso e atende todas as necessidades do seu dia a dia.
            Aqui você irá encontrar lustres, luminárias, utilidades domésticas, ferramentas, acessórios, lâmpadas,
            fios e cabos, quadros de distribuição, caixas de entrada padrão Eletropaulo, materiais elétricos em geral,
            equipamentos de segurança e comunicação.
          </p>
          <Button color="secondary">
            Saiba mais sobre nós
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Bio;