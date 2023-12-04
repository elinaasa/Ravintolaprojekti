import { DailyMenu, MenuRows, errorModal } from "./components";
import { Course, Menu } from "./types";

const apiUrl = "http://localhost:3000/api/menu";

// Function to fetch menu data from the API
async function fetchMenuData(): Promise<{ course: Course; menu: Menu }> {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch menu data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    const errorModalHtml = errorModal("Failed to fetch menu data");
    document.getElementById("menuContainer")!.innerHTML = errorModalHtml;
    throw error; // Propagate the error to handle it elsewhere if needed
  }
}

// Function to display the menu
async function displayMenu() {
  const menuContainer = document.getElementById("menuContainer");

  try {
    // Fetch menu data
    const menuData = await fetchMenuData();

    // Display daily menu
    const dailyMenuHtml = DailyMenu(menuData.course, menuData.menu);
    if (menuContainer) {
      if (dailyMenuHtml !== undefined) {
        menuContainer.innerHTML = dailyMenuHtml;
      } else {
        menuContainer.innerHTML = "";
      }
    }

    // Alternatively, you can append menu rows individually
    const menuTable = document.createElement("table");
    menuData.menu.courses.forEach((course) => {
      const menuRow = MenuRows(course);
      menuTable.appendChild(menuRow);
    });

    if (menuContainer) {
      menuContainer.appendChild(menuTable);
    }
  } catch (error) {
    // Handle the error
  }
}

// Call the function to display the menu
displayMenu();
