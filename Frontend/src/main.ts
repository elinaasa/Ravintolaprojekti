import { MenuItem } from './types';
import { getMenuData } from './components';

const displayMenu = async () => {
  const menuData = await getMenuData();
  const menuContainer = document.querySelector('.menu-container');
  if (menuContainer) {
    menuContainer.innerHTML = '';
  }

  menuData.forEach((menu: MenuItem) => {
    if (menuContainer) {
      const menuCard = document.createElement('div');
      menuCard.classList.add('menu-card');
      menuCard.innerHTML = `
        <h3>${menu.name}</h3>
        <p>${menu.description}</p>
        <p>${menu.diet}</p>
        <p>${menu.week_number}</p>
        <p>${menu.day_of_week}</p>
        <input type="text" id="menu-name" placeholder="Name" />
        <input type="text" id="menu-description" placeholder="Description" />
        <input type="text" id="menu-diet" placeholder="Diet" />
        <input type="text" id="menu-week-number" placeholder="Week Number" />
        <input type="text" id="menu-day-of-week" placeholder="Day of Week" />
        <button id="save-menu">Save Menu</button>
      `;
      menuContainer.appendChild(menuCard);
    }
  });
};

displayMenu();