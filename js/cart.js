let cart =
JSON.parse(
  localStorage.getItem("cart")
) || [];

function addToCart(id) {

  const product = products.find(
    item => item.id === id
  );

  cart.push(product);

  localStorage.setItem(
  "cart",
  JSON.stringify(cart)
  );

  alert(product.name + " added to cart");
}

function displayCart() {

  const cartItems =
    document.getElementById("cartItems");

  if (!cartItems) return;

  if (cart.length === 0) {

    cartItems.innerHTML =
      "<p>Your cart is empty.</p>";

    return;
  }

  const total =
  cart.reduce(
    (sum,item) =>
    sum + item.price,
    0
  );

cartItems.innerHTML =
  cart.map(item => `
    <div class="cart-item">

      <img
        src="${item.image}"
        alt="${item.name}"
        width="120"
      >

      <h3>${item.name}</h3>

      <p>${item.company}</p>

      <p>₹${item.price}</p>
    
    </div>
  `).join("");

  cartItems.innerHTML += `
  <h2>
    Total: ₹${total}
  </h2>
`;
}