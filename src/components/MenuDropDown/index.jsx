import "./styles.css";
import { categories } from "../../libs/data";
import LabeledIcon from "../../shared/LabeledIcon";

function MenuDropDown() {
  return (
    <div>
      {categories.map(category => (
        <LabeledIcon key={category.label} labelPosition="right" {...category} />
      ))}
    </div>
  )
}

export default MenuDropDown