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

const displayMenu = async (weekday: number, weeknumber: number, container: HTMLElement): Promise<void> => {
  console.log("displayMenu");
  const menuData = await getMenuData();
  const menuContainer = container;


  const filteredMenu = menuData.filter(
    (menu) =>
      menu.day_of_week === weekday &&
      menu.week_number === weeknumber
  );

  const day = document.createElement("h3");
  day.innerText = getWeekDayName(filteredMenu[0].day_of_week - 1);
  if (menuContainer) {
    menuContainer.appendChild(day);
  }

  console.log(menuData);
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
const currentDate = new Date();
const currentDayOfWeek = getWeekDay(currentDate);
const currentWeekNumber = getWeekNumber(currentDate);

displayMenu(currentDayOfWeek, currentWeekNumber, document.querySelector(".menu-container"));



for (let i = 1; i < 8; i++) {
    displayMenu(i, currentWeekNumber, document.querySelector(".weeklyLunch-container"));
}

