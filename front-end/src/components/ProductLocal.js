import { Link } from "react-router-dom";

export default function Product({ product }) {
  const API = process.env.REACT_APP_API_URL;

  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <h2>{product.id} - {product.name}</h2>
        <img src={API + product.image} height="100px" alt="local url" />
      </Link>
      <div>Price: ${product.price}</div>
      <div>Rating: {product.rating}</div>
      <h4>Let's include these on the details page instead:</h4>
      <div>Description: {product.description}</div>
      <div>Featured: {product.featured ? (<span>Yes</span>) : (<span>No</span>)}</div>
      <div>Seller: {product.seller}</div>
    </div>
  );
}
