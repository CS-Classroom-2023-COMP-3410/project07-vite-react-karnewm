function ProductsPage({ addToCart }) {
  const products = ["Apple", "Banana", "Orange"];

  return (
    <>
      <h1>Products</h1>

      {products.map((product, index) => (
        <div key={index}>
          <span>{product}</span>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductsPage;