// checkout.js

document.addEventListener("DOMContentLoaded", function () {
  const listCartHTML = document.querySelector(".list-cart");
  const totalAmountHTML = document.querySelector(".total-amount");
  const checkoutBtn = document.querySelector(".checkout-btn");


  let carts = [];

  const getCartFromMemory = () => {
    return new Promise((resolve) => {
      if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
        console.log(carts);
        resolve();
      }
    });
  };

  const displayCart = () => {
    getCartFromMemory();
    listCartHTML.innerHTML = "";
    let totalAmount = 0;
    if (carts.length > 0) {
      carts.forEach((cart) => {
        let newCart = document.createElement("div");
        newCart.classList.add("item");
        newCart.dataset.id = cart.product_id;

        let info = cart.product_id;
        if (info) {
          const productTotal = 12 * cart.quantity;
          totalAmount += productTotal;
          const productName = cart.productName;

          newCart.innerHTML = `
            <div class="name">${productName}</div>
            <div class="total-price">${productTotal}€</div>
            <div class="quantity">${cart.quantity}</div>
          `;
          listCartHTML.appendChild(newCart);
        } else {
          console.error("Product information not found for product_id:", cart.product_id);
        }
      });
    }

    totalAmountHTML.innerText = `Total: ${totalAmount}€`;
  };

  checkoutBtn.addEventListener("click", () => {
  });
  displayCart();
});


