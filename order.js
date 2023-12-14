document.addEventListener("DOMContentLoaded", function () {
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductsHTML = document.querySelector('.list-products');
let listCartHTML = document.querySelector('.list-cart');
let iconCartSpan = document.querySelector('.cart-count');



let listProducts = [];
let carts = [];


function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function getWeekDay(date) {
  return date.getDay();
}


function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}


const currentDate = new Date();
const currentDayOfWeek = getWeekDay(currentDate);
const currentWeekNumber = getWeekNumber(currentDate);



iconCart.addEventListener('click', () => {
    body.classList.toggle('show-cart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('show-cart');
});

const addDatatoHTML = (currentDayOfWeek, currentWeekNumber) => {
  listProductsHTML.innerHTML = '';
  if(listProducts.length > 0) {
    const filteredProducts = listProducts.filter(product =>
      product.day_of_week === currentDayOfWeek && product.week_number === currentWeekNumber
    );

    if(filteredProducts != null) {
      filteredProducts.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `
          <h2>${product.name}</h2>
          <button class="add-cart">Add to cart</button>
        `;
        listProductsHTML.appendChild(newProduct);
      })
    }

  }
}

listProductsHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('add-cart')) {
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
})


const addToCart = (product_id) => {
  let positionInCart = carts.findIndex((value) => value.product_id == product_id);
  let info = listProducts.find((value) => value.id == product_id);
  if(positionInCart < 0){
    carts.push({
      productName: info.name,
      product_id: product_id,
      quantity: 1
    });
  }else{
    carts[positionInCart].quantity = carts[positionInCart].quantity + 1;
  }
  addCartToMemory();
  if(localStorage.getItem('cart')) {
    carts = JSON.parse(localStorage.getItem('cart'));
    addCartToHTML();
  }
}

const addCartToMemory = () => {
  localStorage.setItem('cart', JSON.stringify(carts));
}


const addCartToHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  if(carts.length > 0) {
    carts.forEach(cart => {
      totalQuantity += cart.quantity;
      let newCart = document.createElement('div');
      newCart.classList.add('item');
      newCart.dataset.id = cart.product_id;

      newCart.innerHTML = `
      <div class="name">${cart.productName}</div>
      <div class="total-price">
        ${12 * cart.quantity}€
      </div>
      <div class="quantity">
        <span class="material-icons minus">remove_circle</span>
        <span class="quantity">${cart.quantity}</span>
        <span class="material-icons plus">add_circle</span>
      </div>
      `;
      listCartHTML.appendChild(newCart);
    })
  }
  iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
    let product_id = positionClick.parentElement.parentElement.dataset.id;
    let type = 'minus';
    if (positionClick.classList.contains('plus')) {
      type = 'plus';
  }
  changeQuantity(product_id, type);
  }
})

const changeQuantity = (product_id, type) => {
  let positionInCart = carts.findIndex((value) => value.product_id == product_id);
  if(positionInCart >= 0) {
    switch (type) {
      case 'plus':
        carts[positionInCart].quantity = carts[positionInCart].quantity + 1;
        break;

      default:
        let valueChange = carts[positionInCart].quantity - 1;
        if(valueChange > 0) {
          carts[positionInCart].quantity = valueChange;
        }else{
          carts.splice(positionInCart, 1);
        }
        break;
    }
  }
  addCartToMemory();
  addCartToHTML();
}

const initApp = () => {
  fetch('https://ucad.northeurope.cloudapp.azure.com/api/api/menu')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      let id = product.menu_id;
      product.id = id;
    })
    listProducts = data;
    const currentWeekNumber = getWeekNumber(currentDate);
    addDatatoHTML(currentDayOfWeek, currentWeekNumber);


    // Get cart from memory
    if(localStorage.getItem('cart')) {
      carts = JSON.parse(localStorage.getItem('cart'));
      addCartToHTML();
    }
  })
}

initApp();

});
