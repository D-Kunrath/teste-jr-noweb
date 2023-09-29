import "./styles.css";
import { IoPricetags, IoThumbsUpSharp } from "react-icons/io5";


function IconHolder({ iconName }) {
  const icons = {
    priceTag: <IoPricetags className="icon" />,
    thumbsUp: <IoThumbsUpSharp className="icon" />
  }
  return (
    <div className="icon-holder">
      {icons[iconName]}
    </div>
  )
}

export default IconHolder