import { useState } from "react";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";

function App() {
  const [page, setPage] = useState("home");
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function removeFromCart(item) {
    setCartItems(cartItems.filter(i => i !== item));
  }

  function renderPage() {
    switch (page) {
      case "home":
        return <HomePage />;
      case "products":
        return <ProductsPage addToCart={addToCart} />;
      case "profile":
        return <ProfilePage />;
      case "cart":
        return (
          <CartPage
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        );
      default:
        return <HomePage />;
    }
  }

  return (
    <div>
      <Header
        setPage={setPage}
        cartCount={cartItems.length}
      />

      {cartItems.length > 0 && page !== "cart" && (
        <ShoppingCart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      )}

      {renderPage()}
    </div>
  );
}

export default App;