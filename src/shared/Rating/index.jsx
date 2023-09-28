import "./styles.css";

function Rating({ rating = 0 }) {
  return (
    <div>{rating} stars</div>
  )
}

export default Rating