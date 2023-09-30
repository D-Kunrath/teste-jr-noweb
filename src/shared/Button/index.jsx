import "./styles.css";

function Button({ children, color="primary", size="lg", className }) {
  return (
    <button className={`btn ${color} ${size} ${className}`}>
      {children}
    </button>
  )
}

export default Button;