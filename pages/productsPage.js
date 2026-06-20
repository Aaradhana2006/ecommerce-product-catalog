function ProductsPage() {
  return `
    <section>

      <h2>Our Products</h2>

      <div class="controls">

        <input
          type="text"
          id="searchInput"
          placeholder="Search products..."
        >

        <select id="categoryFilter">

          <option value="all">
            All Categories
          </option>

          <option value="lenevo legion 7 Gaming Laptop">
            lenevo legion 7 Gaming Laptop
          </option>

          <option value="Samsung Galaxy S24 ultra">
            Samsung Galaxy S24 ultra
          </option>

          <option value="sony WH-1000XM4">
            sony WH-1000XM4
          </option>

          <option value="Luxury watch">
            Luxury watch
          </option>

        </select>

      </div>

      <div
        id="productContainer"
        class="products"
      ></div>

    </section>
  `;
}