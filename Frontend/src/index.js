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

console.log(getMenuData());

// Function to display the menu inside div with class lunch-items
// This function is called when the page loads and when the menu is updated
// It calls the getMenuData function to fetch the menu data from the server
// the menu does NOT need input, since it does not need to be updated

const displayMenu = async () => {
  const menuData = await getMenuData();
  const menuContainer = document.querySelector('.lunch-items');
  if (menuContainer) {
    menuContainer.innerHTML = '';
  }
  menuData.forEach((menu) => {
    console.log(menu);
    if (menuContainer) {
      const lunchItems = document.createElement('div');
      lunchItems.classList.add('lunch-items');
      const day = document.createElement('h2');
      day.innerHTML = menu.day_of_week;
      const h2 = document.createElement('h2');
      h2.innerHTML = menu.name;
      const p1 = document.createElement('p');
      p1.innerHTML = menu.description;
      const p2 = document.createElement('p');
      p2.innerHTML = menu.diet;
      lunchItems.appendChild(day);
      lunchItems.appendChild(h2);
      lunchItems.appendChild(p1);
      lunchItems.appendChild(p2);
    }
    displayMenu();
  });
  menuContainer.appendChild(lunchItems);
};
