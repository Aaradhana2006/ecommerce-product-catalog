function ProductDetailPage(id) {

  const product =
    products.find(
      item => item.id === id
    );

  return `
    <div class="detail-page">

      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div>

        <h2>${product.name}</h2>

        <p>
          ${product.company}
        </p>

        <h3>
          ₹${product.price}
        </h3>

        <button
          onclick="addToCart(${product.id})"
        >
          Add To Cart
        </button>

      </div>

    </div>
  `;
}