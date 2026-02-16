import { useState } from "react";
import Header from "./Header";
import ProductsPage from "./src/pages/ProductsPage";
import ProfilePage from "./ProfilePage";
import ShoppingCart from "./ShoppingCart";
import CartPage from "./CartPage";

function App() {
  const [page, setPage] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const renderPage = () => {
    switch (page) {
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
        return <ProductsPage addToCart={addToCart} />;
    }
  };

  return (
    <>
      <Header
        setPage={setPage}
        cartCount={cartItems.length}
      />


      {renderPage()}
    </>
  );
}

export default App;