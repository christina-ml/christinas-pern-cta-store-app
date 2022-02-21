import { Link } from "react-router-dom";

// helper function - ratings
import setStars from "../helpers/setStars";

export default function Product({ product }) {
  return (
    <div className="product-overview">
        <Link to={`/products/${product.id}`}>
          <h2>{product.name}</h2>
          <img src={product.image} alt="text url" />
        </Link>
        <div>Rating: {setStars(product)}</div>
        <div>Price: ${product.price}</div>
    </div>
  );
}
