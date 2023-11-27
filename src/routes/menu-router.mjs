// menuRouter.js
import express from 'express';
const router = express.Router();

// Import the function to get menu data from the database
const {getMenuFromDatabase} = require('../controllers/menuController');

// Define the /menu endpoint
router.get('/', async (req, res) => {
  try {
    const menuItems = await getMenuFromDatabase();
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

module.exports = router;
