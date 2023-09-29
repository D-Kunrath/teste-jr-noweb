import "./styles.css";
import { IoPricetags, IoThumbsUpSharp } from "react-icons/io5";


function IconHolder({ iconName, size="sm" }) {
  const icons = {
    priceTag: <IoPricetags className="icon" />,
    thumbsUp: <IoThumbsUpSharp className="icon" />
  }
  return (
    <div className={`icon-holder ${size}`}>
      {icons[iconName]}
    </div>
  )
}

export default IconHolder