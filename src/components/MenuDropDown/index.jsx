import "./styles.css";
import { categories } from "../../libs/data";
import LabeledIcon from "../../shared/LabeledIcon";

function MenuDropDown({ className, isOpen, ...rest }) {
  return isOpen ? (
    <div className={`dropdown ${className}`} {...rest}>
      <div className="arrow"></div>
      {categories.map(category => (
        <LabeledIcon key={category.label} size="md" labelPosition="right" {...category} />
      ))}
    </div>
  ) : <></>
}

export default MenuDropDown