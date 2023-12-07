interface Menu {
    id: number;
    name: string;
    description: string;
    diet: string;
    day_of_week: number;
    week_number: number;
  }

  
const getMenuData2 = async (): Promise<Menu[]> => {
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

console.log(getWeekNumber(new Date()));

function getWeekDay(date: Date): number {
  return date.getDay();
}

console.log(getWeekNumber(new Date()));

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

console.log(getWeekDayName(0));

const displayMenu2 = async (): Promise<void> => {
  const menuData = await getMenuData2();
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

  filteredMenu.forEach((menu) => {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    const day = document.querySelector("#week-day") as HTMLElement;
    if (day) {
        day.innerText = getWeekDayName(menu.day_of_week - 1);
    }

    const h3 = document.createElement("h3");
    h3.innerHTML = menu.name;

    const p1 = document.createElement("p");
    p1.innerHTML = menu.description;

    const p2 = document.createElement("p");
    p2.innerHTML = menu.diet;

    menuCard.appendChild(day);
    menuCard.appendChild(h3);
    menuCard.appendChild(p1);
    menuCard.appendChild(p2);

    if (menuContainer) {
      menuContainer.appendChild(menuCard);
    }
  });
};

displayMenu2();