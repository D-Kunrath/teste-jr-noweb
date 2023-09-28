import "./styles.css";
import { IoPricetags, IoThumbsUpSharp } from "react-icons/io5";


function IconHolder({ iconName }) {
  const icons = {
    priceTag: <IoPricetags />,
    thumbsUp: <IoThumbsUpSharp />
  }
  return (
    <div>
      {icons[iconName] || "icon missing"}
    </div>
  )
}

export default IconHolder