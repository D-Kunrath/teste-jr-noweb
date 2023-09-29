import "./styles.css";

import { categories } from "../../libs/data";
import LabeledIcon from "../../shared/LabeledIcon";
import CardWrapper from "../../shared/CardWrapper";

function Categories() {
  return (
    <section className="categories">
      <h2>Categorias</h2>
      <CardWrapper>
        {categories.map(category => (
          <LabeledIcon key={category.label} {...category} />
        ))}
      </CardWrapper>
    </section>
  )
}

export default Categories