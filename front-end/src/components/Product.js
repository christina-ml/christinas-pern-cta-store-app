import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <h2>{product.id} - {product.name}</h2>
        <img src={product.image} height="100px" alt="text url" />
      </Link>
      <div>Price: ${product.price}</div>
      <div>Rating: {product.rating}</div>
    </div>
  );
}
