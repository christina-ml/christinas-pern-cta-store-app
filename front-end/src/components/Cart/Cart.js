import './Cart.css';

export default function Cart({ cartItems, subtotal }) {
  return (
    <div>
      <h3>Shopping Cart</h3>
      <div className="cart-added-items">
        {cartItems.length === 0 ? (
          <span>Your cart is empty. Add an item to the cart.</span>
        ) : (
          <ul>{cartItems}</ul>
        )}
      </div>
      <div className="cart-total">
          <h2>Subtotal: ${ Number(subtotal).toFixed(2) }</h2>
          <h2>Tax: ${ (Number(subtotal) * 0.05).toFixed(2) }</h2>
          <h2>Total: ${ (Number(subtotal) * 1.05).toFixed(2) }</h2>
      </div>
    </div>
  );
}
