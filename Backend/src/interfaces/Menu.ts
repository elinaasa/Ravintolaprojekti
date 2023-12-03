// export interface Course {
//   name: string;
//   description: string;
//   diet: string;
// }

// export interface DailyMenu {
//   courses: Course[];
// }

// /*-----WEEKLY MENU------*/

// export interface WeeklyMenu {
//   days: {
//     day_of_week: string;
//     courses: Course[];
//   }[];
// }

// export interface Course {
//   name: string
//   price: string
//   diets: string[]
// }

// export interface DailyMenu {
//   courses: Course[];
// }

// /*-----WEEKLY MENU------*/

// export interface WeeklyMenu {
// days: {
// date: string
// courses: Course[]
// }[]
// }

interface MenuItem {
  id: number;
  name: string;
  description: string | null;
  diet: string;
  week_number: number;
  day_of_week: number;
}

// Function to fetch menu data from the server
async function fetchMenuData(): Promise<MenuItem[][] | null> {
  try {
    const response = await fetch('/getMenus');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return null;
  }
}

// Function to print the weekly menu
function printWeeklyMenu(menuData: MenuItem[][]) {
  const menuContainer = document.getElementById('menu-container');

  // Clear any existing content
  if (menuContainer) {
    menuContainer.innerHTML = '';

    // Loop through each week
    menuData.forEach(week => {
      // Create a heading for the week
      const weekHeading = document.createElement('h2');
      weekHeading.textContent = `Week ${week[0].week_number}`;
      menuContainer.appendChild(weekHeading);

      // Create a list for each day
      const weekList = document.createElement('ul');

      // Loop through each day
      week.forEach(menuItem => {
        // Create a list item for the menu item
        const listItem = document.createElement('li');
        listItem.textContent = `${getDayName(menuItem.day_of_week)}: ${
          menuItem.name
        }`;
        weekList.appendChild(listItem);
      });

      // Append the list to the container
      menuContainer.appendChild(weekList);
    });
  }
}

// Function to print the daily menu
function printDailyMenu(menuData: MenuItem[], dayNumber: number) {
  // Assuming menuData is an array containing the menu items for the selected day

  // Get the element where you want to display the menu
  const menuContainer = document.getElementById('menu-container');

  // Clear any existing content
  if (menuContainer) {
    menuContainer.innerHTML = '';

    // Create a heading for the day
    const dayHeading = document.createElement('h2');
    dayHeading.textContent = `${getDayName(dayNumber)} Menu`;
    menuContainer.appendChild(dayHeading);

    // Create a list for the menu items
    const dayList = document.createElement('ul');

    // Filter menuData for the selected day
    const dayMenu = menuData.filter(
      menuItem => menuItem.day_of_week === dayNumber
    );

    // Loop through each menu item for the day
    dayMenu.forEach(menuItem => {
      // Create a list item for the menu item
      const listItem = document.createElement('li');
      listItem.textContent = menuItem.name;
      dayList.appendChild(listItem);
    });

    // Append the list to the container
    menuContainer.appendChild(dayList);
  }
}

// Helper function to get day name from day number
function getDayName(dayNumber: number): string {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[dayNumber - 1];
}

// Call the function to fetch menu data and print menus
fetchMenuData().then(menuData => {
  if (menuData) {
    // Example: Print weekly menu
    printWeeklyMenu(menuData);

    // Example: Print daily menu for Monday (day number 1)
    const selectedDay = 1;
    printDailyMenu(menuData.flat(), selectedDay);
  }
});
