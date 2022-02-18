export default function Product({ product }) {
  const API = process.env.REACT_APP_API_URL;

  return (
    <div>
      <h2>Product Name: {product.name}</h2>
      <img src={API + product.image} height="100px" alt="local url" />
      <div>Description: {product.description}</div>
      <div>Rating: {product.rating}</div>
      <div>Featured: {product.featured}</div>
      <div>Seller: {product.seller}</div>
    </div>
  );
}
