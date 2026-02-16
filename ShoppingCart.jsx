function ShoppingCart({ cartItems, removeFromCart, compact }) {
  return (
    <div className="cart">
      <h3>{compact ? "Cart Summary" : "Your Cart"}</h3>

      {cartItems.length === 0 && <p>No items yet.</p>}

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFromCart(index)}>
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