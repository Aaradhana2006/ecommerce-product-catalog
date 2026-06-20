function displayProducts(productList) {

  const container =
    document.getElementById(
      "productContainer"
    );

  if (!container) return;

  container.innerHTML =
    productList.map(product => `
        
        <div class="card">
        
        <img
        src="${product.image}"
        alt="${product.name}"
        >

        <div class="card-content">

        <h3>${product.name}</h3>

        <p>${product.company}</p>

          <h4>₹${product.price}</h4>

    <button
      onclick="navigate('detail', ${product.id})">
      View Details
    </button>

  </div>

</div>
    `).join("");
}
function setupSearch() {

  const searchInput =
    document.getElementById("searchInput");

  if (!searchInput) return;

  searchInput.addEventListener(
    "input",
    (e) => {

      const searchText =
        e.target.value.toLowerCase();

      const filteredProducts =
        products.filter(product =>
          product.name
            .toLowerCase()
            .includes(searchText)
        );

      displayProducts(filteredProducts);
    }
  );
}

function setupCategoryFilter() {

  const filter =
    document.getElementById("categoryFilter");

  if (!filter) return;

  filter.addEventListener(
    "change",
    () => {

      const value =
        filter.value;

      if(value === "all"){

        displayProducts(products);

        return;
      }

      const filteredProducts =
        products.filter(
          product =>
          product.category === value
        );

      displayProducts(filteredProducts);
    }
  );
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    navigate("home");
  }
);