// Function to fetch menu data from the server
const getMenuData = async () => {
  try {
    const response = await fetch("http://localhost:3000/menu");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return [];
  }
};

// Function to update menu data on the server
const updateMenuData = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/menu", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error updating menu data:", error);
    return null;
  }
};

// Function to display the menus
const displayMenu = async () => {
  try {
    const menuData = await getMenuData();
    const menuContainer = document.querySelector(".menu-container");
    if (menuContainer) {
      menuContainer.innerHTML = "";
    }
    menuData.forEach((menu) => {
      if (menuContainer) {
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");
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
  } catch (error) {
    console.error("Error displaying menu:", error);
  }
};

// Function to save the menus
const saveMenu = async () => {
  const menuName = document.querySelector("#menu-name");
  const menuDescription = document.querySelector("#menu-description");
  const menuDiet = document.querySelector("#menu-diet");
  const menuWeekNumber = document.querySelector("#menu-week-number");
  const menuDayOfWeek = document.querySelector("#menu-day-of-week");

  try {
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
  } catch (error) {
    console.error("Error saving menu:", error);
  }
};
