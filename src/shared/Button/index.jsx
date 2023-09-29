import "./styles.css";

function Button({ children, color="primary", size="lg" }) {
  return (
    <button className={`btn ${color} ${size}`}>
      {children}
    </button>
  )
}

export default Button;