import ShoppingCart from "./ShoppingCart";

function CartPage({ cartItems, removeFromCart }) {
  return (
    <>
      <h1>Cart Page</h1>
      <ShoppingCart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </>
  );
}

export default CartPage;