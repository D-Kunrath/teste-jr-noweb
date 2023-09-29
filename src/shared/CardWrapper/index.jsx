import "./styles.css";

function CardWrapper({ children }) {
  return (
    <div class="card-wrapper">
      {children}
    </div>
  )
}

export default CardWrapper;