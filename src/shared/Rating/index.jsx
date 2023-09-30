import "./styles.css";

function Rating({ rating = 0, ...rest }) {
  return (
    <div {...rest}>{rating} stars</div>
  )
}

export default Rating