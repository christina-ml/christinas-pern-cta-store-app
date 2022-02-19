import { Link } from "react-router-dom";

// helper function - ratings
import setStars from "../helpers/setStars";

export default function Product({ product }) {
  const API = process.env.REACT_APP_API_URL;

  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <h2>#{product.id} - {product.name}</h2>
        <img src={API + product.image} height="100px" alt="local url" />
      </Link>
      <div>Price: ${product.price}</div>
      <div>Rating: {product.rating}{setStars(product)}</div>
    </div>
  );
}
