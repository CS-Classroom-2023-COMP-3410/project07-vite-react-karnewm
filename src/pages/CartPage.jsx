import ShoppingCart from "../components/ShoppingCart";

function CartPage({ cartItems, removeFromCart }) {
  return (
    <div>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ShoppingCart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default CartPage;