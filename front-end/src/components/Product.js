export default function Product({ product }) {
  return (
    <div>
      <h2>Product Name: {product.name}</h2>
      <img src={product.image} height="100px" alt="text url" />
      <div>Description: {product.description}</div>
      <div>Rating: {product.rating}</div>
      <div>Featured: {product.featured}</div>
      <div>Seller: {product.seller}</div>
    </div>
  );
}
