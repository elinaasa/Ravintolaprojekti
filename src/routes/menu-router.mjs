import express from 'express';

const router = express.Router();
const menuController = require('./controllers/menuController');

// Get the entire weekly menu
router.get('/menu', menuController.getWeeklyMenu);

// Get the menu for a specific day
router.get('/menu/:day', menuController.getDailyMenu);

// Update the menu for a specific day
router.put('/menu/:day', menuController.updateDailyMenu);

module.exports = router;
