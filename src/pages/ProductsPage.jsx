function ProductsPage({ addToCart }) {
  return (
    <div>
      <h1>Products</h1>

      <p>
        Apple{" "}
        <button onClick={() => addToCart("Apple")}>
          Add to Cart
        </button>
      </p>

      <p>
        Banana{" "}
        <button onClick={() => addToCart("Banana")}>
          Add to Cart
        </button>
      </p>

      <p>
        Orange{" "}
        <button onClick={() => addToCart("Orange")}>
          Add to Cart
        </button>
      </p>
    </div>
  );
}

export default ProductsPage;