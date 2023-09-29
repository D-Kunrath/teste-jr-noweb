import './styles.css';
import { highlightedProducts } from '../../libs/data'; 
import ProductCard from '../../shared/ProductCard';

function Highlights() {
  return (
    <section id="highlights">
      <h2>Produtos em destaque</h2>
      {highlightedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default Highlights;