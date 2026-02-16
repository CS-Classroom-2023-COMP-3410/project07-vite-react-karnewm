function ShoppingCart({ cartItems, removeFromCart }) {
  return (
    <div>
      <h2>Cart Summary</h2>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p>Total items: {cartItems.length}</p>
    </div>
  );
}

export default ShoppingCart;