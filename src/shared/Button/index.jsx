import './styles.css';

function Button({ children, color='primary' }) {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button;