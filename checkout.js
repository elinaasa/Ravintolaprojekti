// checkout.js

document.addEventListener("DOMContentLoaded", function () {
  const listCartHTML = document.querySelector(".list-cart");
  const totalAmountHTML = document.querySelector(".total-amount");
  const checkoutBtn = document.querySelector(".checkout-btn");

  let carts = [];
  let listProducts = [];

  const getCartFromMemory = () => {
    return new Promise((resolve) => {
      if (localStorage.getItem("list-products")) {
        carts = JSON.parse(localStorage.getItem("item"));
        console.log(carts);
        resolve();
      }
    });
  };

  const init = async () => {
    await getCartFromMemory();
    displayCart();
  };

  init();
  const displayCart = () => {
    listCartHTML.innerHTML = "";
    let totalAmount = 0;

    if (carts.length > 0 && listProducts.length > 0) {
      carts.forEach((cart) => {
        let newCart = document.createElement("div");
        newCart.classList.add("item");
        newCart.dataset.id = cart.product_id;

        let info = listProducts.find((product) => product.id == cart.product_id);

        if (info) {
          const productTotal = 12 * cart.quantity;
          totalAmount += productTotal;
          console.log(totalAmount);

          newCart.innerHTML = `
            <div class="name">${info.name}</div>
            <div class="total-price">${productTotal}€</div>
            <div class="quantity">${cart.quantity}</div>
          `;
          listCartHTML.appendChild(newCart);
        } else {
          console.error("Product information not found for product_id:", cart.product_id);
          console.log("listProducts:", listProducts);
        }
      });
    }

    totalAmountHTML.innerText = `Total: ${totalAmount}€`;
  };

  checkoutBtn.addEventListener("click", () => {
    // You can implement the logic for the checkout process here
    // For example, send the cart data to a server for processing
    alert("Checkout process is not implemented in this example.");
  });

  getCartFromMemory();
});
