// Function to fetch menu data from the server
const getMenuData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/menu");
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
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to update menu data");
      return;
    }
    const response = await fetch("http://localhost:3000/api/menu/" + data.id, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
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
  const menuData = await getMenuData();
  const menuContainer = document.querySelector(".menu-container");
  if (menuContainer) {
    menuContainer.innerHTML = "";
  }
  menuData.forEach((menu) => {
    console.log(menu);
    if (menuContainer) {
      const menuCard = document.createElement("div");
      menuCard.classList.add("menu-card");
      const h3 = document.createElement("h3");
      h3.innerHTML = menu.name;
      const p1 = document.createElement("p");
      p1.innerHTML = menu.description;
      const p2 = document.createElement("p");
      p2.innerHTML = menu.diet;
      const p3 = document.createElement("p");
      p3.innerHTML = `Menu week: ${menu.week_number}`;
      const p4 = document.createElement("p");
      p4.innerHTML = `Menu day: ${menu.day_of_week}`;
      const form = document.createElement("form");
      const input1 = document.createElement("input");
      input1.setAttribute("type", "text");
      input1.placeholder = "Name";
      const input2 = document.createElement("input");
      input2.setAttribute("type", "text");
      input2.placeholder = "Description";
      const input3 = document.createElement("input");
      input3.setAttribute("type", "text");
      input3.placeholder = "Diet";
      const button = document.createElement("button");
      button.setAttribute("type", "submit");
      button.innerHTML = "Save Menu";
      menuCard.appendChild(h3);
      menuCard.appendChild(p1);
      menuCard.appendChild(p2);
      menuCard.appendChild(p3);
      menuCard.appendChild(p4);
      menuCard.appendChild(form);
      form.appendChild(input1);
      form.appendChild(input2);
      form.appendChild(input3);
      form.appendChild(button);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const newMenu = {
          id: menu.menu_id,
          name: input1.value,
          description: input2.value,
          diet: input3.value,
          week_number: menu.week_number,
          day_of_week: menu.day_of_week,
        };
        await updateMenuData(newMenu);
        // menuCard.remove();
        displayMenu();
      });
      menuContainer.appendChild(menuCard);
    }
  });
};

// Function to save the menus
// check the id of the menu and update the menu data
// remove the menu card and display the updated menu
// save the menu data to the server once the submit button is clicked

const showMenu = async () => {
  const menuName = document.querySelector("#menu-name");
  const menuDescription = document.querySelector("#menu-description");
  const menuDiet = document.querySelector("#menu-diet");
  const menuWeekNumber = document.querySelector("#menu-week-number");
  const menuDayOfWeek = document.querySelector("#menu-day-of-week");
  try {
    const menuData = await getMenuData();
    // const newMenu = {
    //   id: menuData.length + 1,
    //   name: menuName.value,
    //   description: menuDescription.value,
    //   diet: menuDiet.value,
    //   week_number: parseInt(menuWeekNumber.value),
    //   day_of_week: parseInt(menuDayOfWeek.value),
    // };
    // menuData.push(newMenu);
    displayMenu();
  } catch (error) {
    console.error("Error saving menu:", error);
  }
};

displayMenu();

const checkToken = () => {
  const token = localStorage.getItem("token");
  // Tarkasta palvelimelta, onko token oikea
  if (!token) {
    window.location.href = "http://127.0.0.1:5501/Frontend/index.html";
  }
};

checkToken();
