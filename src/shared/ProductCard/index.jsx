import "./styles.css"
import { highlightImages } from '../../assets';
import { formatCurrencyString } from "../../libs/utils";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="category">
        {product.category}
      </div>
      <img src={highlightImages[product.image]} alt={product.name} />
      <div className="card-body">
        <h3 className="name">{product.name}</h3>
        <div className="prices">
          <p className="full">{formatCurrencyString(product.fullPrice)}</p>
          <p className="discounted">{formatCurrencyString(product.price)}</p>
        </div>
        <div className="extra">
          {product.installment && (
            <p className="installment">
              ou em {product.installment.times}x de {formatCurrencyString(product.installment.pay)}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard;