// Function to fetch menu data from the server
const getMenuData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/menu');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return [];
  }
};

// create a function which creates and displays the menu inside div with class "lunch-items"

const createMenu = async () => {
  const menuData = await getMenuData();
  const lunchItems = document.querySelector('.lunch-items');
  lunchItems.innerHTML = '';
  menuData.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    const itemName = document.createElement('h3');
    itemName.innerText = item.name;
    const itemPrice = document.createElement('p');
    itemPrice.innerText = item.price;
    const itemDescription = document.createElement('p');
    itemDescription.innerText = item.description;
    itemDiv.append(itemName, itemPrice, itemDescription);
    lunchItems.append(itemDiv);
  });
};
