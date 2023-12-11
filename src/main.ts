interface Menu {
    id: number;
    name: string;
    description: string;
    diet: string;
    day_of_week: number;
    week_number: number;
  }


const getMenuData = async (): Promise<Menu[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/menu");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return [];
  }
};

function getWeekNumber(date: Date): number {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function getWeekDay(date: Date): number {
  return date.getDay();
}

function getWeekDayName(day: number): string {
  const days = [
    "Maanantai",
    "Tiistai",
    "Keskiviikko",
    "Torstai",
    "Perjantai",
    "Lauantai",
    "Sunnuntai",
  ];
  return days[day];
}


const displayMenu = async (weekday: number, weeknumber: number, container: HTMLElement): Promise<void> => {
  const menuData = await getMenuData();
  const menuContainer = container;


  const filteredMenu = menuData.filter(
    (menu) =>
      menu.day_of_week === weekday &&
      menu.week_number === weeknumber
  );

  const day = document.createElement("h2");
  day.innerText = getWeekDayName(filteredMenu[0].day_of_week - 1);
  if (menuContainer) {
    menuContainer.appendChild(day);
  }

  filteredMenu.forEach((menu) => {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");


    const name = document.createElement("h3");
    name.innerHTML = menu.name;

    const desc = document.createElement("p");
    desc.innerHTML = menu.description;

    const diet = document.createElement("h4");
    diet.innerHTML = menu.diet;

    menuCard.appendChild(name);
    menuCard.appendChild(desc);
    menuCard.appendChild(diet);

    if (menuContainer) {
      menuContainer.appendChild(menuCard);
    }
  });
};
const currentDate = new Date();
const currentDayOfWeek = getWeekDay(currentDate);
const currentWeekNumber = getWeekNumber(currentDate);

displayMenu(currentDayOfWeek, currentWeekNumber, document.querySelector(".menu-container"));



for (let i = 1; i < 8; i++) {
    displayMenu(i, currentWeekNumber, document.querySelector(".weeklyLunch-right"));
}



