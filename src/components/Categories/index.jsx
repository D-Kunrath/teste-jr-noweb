import "./styles.css";

import { categories } from "../../libs/data";
import LabeledIcon from "../../shared/LabeledIcon";

function Categories() {
  return (
    <section>
      <h2>Categorias</h2>
      {categories.map(category => (
        <LabeledIcon key={category.label} {...category} />
      ))}
    </section>
  )
}

export default Categories