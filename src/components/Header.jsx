function Header({ setPage, cartCount }) {
  return (
    <nav>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("products")}>Products</button>
      <button onClick={() => setPage("profile")}>Profile</button>
      <button onClick={() => setPage("cart")}>
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Header;