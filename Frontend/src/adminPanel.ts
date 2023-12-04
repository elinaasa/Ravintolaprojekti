interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    diet: string;
    week_number: number;
    day_of_week: number;
  }

// Function to fetch menu data from the server

async function fetchMenus(): Promise<MenuItem[]> {
    try {
      const response = await fetch('https://yourapi.com/menus');
      if (!response.ok) {
        throw new Error('Failed to fetch menus');
      }
      const data = await response.json();
      return data.menus;
    } catch (error) {
      console.error('Error fetching menus:', error);
      return [];
    }
  }

  // function to update menu data on the server

  async function updateMenus(updatedMenus: MenuItem[]): Promise<void> {
    try {
      const response = await fetch('https://yourapi.com/menus', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ menus: updatedMenus }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update menus');
      }
  
      // Handle success
      // You might perform additional actions upon successful update
    } catch (error) {
      console.error('Error updating menus:', error);
      // Handle error
    }
  }

  // Frunction to display the menus

  async function displayMenus(): Promise<void> {
    const menuList = document.getElementById('menuList');
    const existingMenus: MenuItem[] = await fetchMenus();
  
    if (menuList) {
      existingMenus.forEach(menu => {
        const menuItemElement = document.createElement('div');
        menuItemElement.textContent = menu.name;
        menuList.appendChild(menuItemElement);
      });
    }
  
    const addMenuItemButton = document.getElementById('addMenuItem');
    const newMenuItemInput = document.getElementById('newMenuItem');
  
    if (addMenuItemButton && newMenuItemInput) {
      addMenuItemButton.addEventListener('click', () => {
        const newMenuItemInput = document.getElementById('newMenuItem') as HTMLInputElement;

        const newMenuItemName = newMenuItemInput.value;
        const newMenu: MenuItem = {
            id: existingMenus.length + 1,
            name: newMenuItemName,
            description: null, // Add the missing properties
            diet: '',
            week_number: 0,
            day_of_week: 0,
        };
        existingMenus.push(newMenu);

        const menuItemElement = document.createElement('div');
        menuItemElement.textContent = newMenuItemName;
        if (menuList) {
            menuList.appendChild(menuItemElement);
        }

        newMenuItemInput.value = ''; // Clear input field after adding
      });
    }};

    // Function to save the menus

    const saveChangesButton = document.getElementById('saveChanges');
    if (saveChangesButton) {
        saveChangesButton.addEventListener('click', async () => {
            const existingMenus: MenuItem[] = await fetchMenus();
            await updateMenus(existingMenus);
            alert('Changes saved successfully!');
        });
    };

    displayMenus();
