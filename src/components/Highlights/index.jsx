import './styles.css';
import { highlightedProducts } from '../../libs/data'; 
import ProductCard from '../../shared/ProductCard';
import CardWrapper from '../../shared/CardWrapper';

function Highlights() {
  return (
    <section id="highlights" className="highlights">
      <h2>Produtos em destaque</h2>
      <CardWrapper>
        {highlightedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardWrapper>
    </section>
  )
}

export default Highlights;