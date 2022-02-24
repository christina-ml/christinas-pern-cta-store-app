export default function Cart({ cartItems }) {
  // export default function Cart({ cartItems, subtotal }) {
  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <span>Empty Cart. Add an item to the cart.</span>
        ) : (
          <ul>{cartItems}</ul>
        )}
    
        {/* <hr />
        <h2>Subtotal: { (subtotal) }</h2>
        <h2>Tax: { (subtotal * 0.05) }</h2>
        <h2>Total: { (subtotal * 1.05) }</h2> */}
      </div>
    </div>
  );
}
