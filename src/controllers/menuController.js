// Controller for handling menu-related operations
const menuController = {
  // Get all menu items
  getAllMenuItems: (req, res) => {
    res.json(menuItems);
  },

  // Get a specific menu item by ID
  getMenuItemById: (req, res) => {
    const itemId = parseInt(req.params.id);
    const menuItem = menuItems.find(item => item.id === itemId);

    if (menuItem) {
      res.json(menuItem);
    } else {
      res.status(404).json({message: 'Menu item not found'});
    }
  },

  // Add a new menu item
  addMenuItem: (req, res) => {
    const newItem = req.body;
    newItem.id = menuItems.length + 1;
    menuItems.push(newItem);
    res.status(201).json(newItem);
  },

  // Update an existing menu item
  updateMenuItem: (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;

    menuItems = menuItems.map(item =>
      item.id === itemId ? {...item, ...updatedItem} : item
    );

    res.json({message: 'Menu item updated successfully'});
  },

  // Delete a menu item by ID
  deleteMenuItem: (req, res) => {
    const itemId = parseInt(req.params.id);
    menuItems = menuItems.filter(item => item.id !== itemId);
    res.json({message: 'Menu item deleted successfully'});
  },
};

function displayMenu(menuItems) {
  const menuContainer = document.getElementById('menu-container');

  // Loop through menu items and generate HTML
  menuItems.forEach(item => {
    const menuItemHTML = `
      <div class="menu-item">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>Diet Restriction: ${item.diet_restriction}</p>
      </div>
    `;

    // Append HTML to menu container
    menuContainer.innerHTML += menuItemHTML;
  });
}

module.exports = menuController;
