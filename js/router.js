function navigate(page,id=null) {

  const app = document.getElementById("app");

  switch(page) {

    case "home":
      app.innerHTML = HomePage();
      break;

    case "products":

      app.innerHTML =
      ProductsPage();
      
      displayProducts(products);
      
      setupSearch();
      
      setupCategoryFilter();
      
      break;

    case "cart":

        app.innerHTML =
         CartPage();
         displayCart();

        break;

    case "detail":
        app.innerHTML =
         ProductDetailPage(id);

        break;
  }
}