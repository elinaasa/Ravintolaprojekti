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

// Function to get the week number
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

console.log(getWeekNumber(new Date()));

function getWeekDay(date) {
  return date.getDay();
}

console.log(getWeekNumber(new Date()));

function getWeekDayName(day) {
  const days = ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai"];
  return days[day];
}

console.log(getWeekDayName(0));

const displayMenu = async () => {
  const menuData = await getMenuData();
  const menuContainer = document.querySelector(".menu-container");
  if (menuContainer) {
    menuContainer.innerHTML = "";
  }

  const currentDate = new Date();
  const currentDayOfWeek = getWeekDay(currentDate);
  const currentWeekNumber = getWeekNumber(currentDate);

  const filteredMenu = menuData.filter(
    (menu) =>
      menu.day_of_week === currentDayOfWeek &&
      menu.week_number === currentWeekNumber
  );

  const day = document.createElement("h2");
  day.innerHTML = getWeekDayName(filteredMenu[0].day_of_week - 1);
  menuContainer.appendChild(day);

  filteredMenu.forEach((menu) => {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    const h3 = document.createElement("h3");
    h3.innerHTML = menu.name;

    const p1 = document.createElement("p");
    p1.innerHTML = menu.description;

    const p2 = document.createElement("p");
    p2.innerHTML = menu.diet;

    menuCard.appendChild(h3);
    menuCard.appendChild(p1);
    menuCard.appendChild(p2);

    if (menuContainer) {
      menuContainer.appendChild(menuCard);
    }
  });
};

// Function to save the menus
// check the id of the menu and update the menu data
// remove the menu card and display the updated menu
// save the menu data to the server once the submit button is clicked

displayMenu();
