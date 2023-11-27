// menuController.js

// Sample in-memory data as a placeholder for database interaction
let menuItems = [
  {
    id: 1,
    name: 'Burger',
    price: 10.99,
    description: 'Juicy beef burger with lettuce and cheese',
  },
  {
    id: 2,
    name: 'Pizza',
    price: 12.99,
    description: 'Classic Margherita pizza with tomato and mozzarella',
  },
  // Add more items as needed
];

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

module.exports = menuController;
