import "./styles.css"

function ProductCard({ product }) {
  return (
    <div>
      {product.name} - {product.image}
    </div>
  )
}

export default ProductCard;