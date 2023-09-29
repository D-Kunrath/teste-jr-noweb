import "./styles.css";
import { categoryImages } from "../../assets";

function LabeledIcon({ label, image, labelPosition = "top", size = "lg" }) {
  return (
    <div className={`labeled-icon pos-${labelPosition} ${size}`}>
      <p className="label">
        {label}
      </p>
      <div className="icon">
        <img src={categoryImages[image]} alt={label} />
      </div>
    </div>
  )
}

export default LabeledIcon;