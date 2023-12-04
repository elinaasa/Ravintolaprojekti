interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    diet: string;
    week_number: number;
    day_of_week: number;
  }

// Function to fetch menu data from the server

const getMenuData = async () => {
    const response = await fetch('http://localhost:3000/menu');
    const data = await response.json();
    return data;
  };

  // function to update menu data on the server on the html page

  const updateMenuData = async (data: MenuItem[]) => {
    const response = await fetch('http://localhost:3000/menu', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  };

  // Function to display the menus

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
                `;
                menuContainer.appendChild(menuCard);
            }
        });
    };

    // Function to save the menus
const saveMenu = async () => {
    const menuName = document.querySelector('#menu-name') as HTMLInputElement;
    const menuDescription = document.querySelector('#menu-description') as HTMLInputElement;
    const menuDiet = document.querySelector('#menu-diet') as HTMLInputElement;
    const menuWeekNumber = document.querySelector('#menu-week-number') as HTMLInputElement;
    const menuDayOfWeek = document.querySelector('#menu-day-of-week') as HTMLInputElement;
    const menuData = await getMenuData();
    const newMenu = {
      id: menuData.length + 1,
      name: menuName.value,
      description: menuDescription.value,
      diet: menuDiet.value,
      week_number: parseInt(menuWeekNumber.value),
      day_of_week: parseInt(menuDayOfWeek.value),
    };
    menuData.push(newMenu);
    await updateMenuData(menuData);
    displayMenu();
  };