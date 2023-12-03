// TODO: Create a menu controller the same way as the user controller has been created in user-controller.mjs

import {validationResult} from 'express-validator';
import {
  addMenu,
  fetchAllMenus,
  fetchMenuById,
  updateMenuById,
  deleteMenuById,
} from '../models/menu-model.mjs';

const getMenus = async (req, res) => {
  const limit = req.query.limit;
  const menuItems = await fetchAllMenus();
  res.json(menuItems);
};

const getMenusById = async (req, res) => {
  console.log('getMenusById', req.params);
  const result = await fetchMenuById(req.params.menu_id);

  if (result) {
    if (result.error) {
      res.status(500);
    }
    res.json(result);
  } else {
    res.status(404);
    res.json({error: 'Menu not found.', menu_id: req.params.id});
  }
};

const postMenu = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validation errors', errors.array());
    const error = new Error('Invalid data');
    error.status = 400;
    return next(error);
  }

  const {name, description, diet} = req.body;
  // req.user is added by authenticateToken middleware
  const newMenu = {name, description, diet};
  const result = await addMenu(newMenu);
  if (result.error) {
    return next(new Error(result.error));
  }
  res.status(201).json({message: 'New menu added', menu_id: result});
};

const putMenu = async (req, res, next) => {
  console.log('Request body:', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors', errors.array());
    const error = new Error('Invalid data');
    error.status = 400;
    return next(error);
  }

  console.log('Menu updated', req.params);
  const result = await updateMenuById(req.params.id, req.body);
  if (result.error) {
    return next(new Error(result.error));
  }
  res.status(200).json({message: 'Menu updated', menu_id: req.params.id});
};

const deleteMenu = async (req, res) => {
  console.log('Menu deleted', req.params);
  const result = await deleteMenuById(req.params.id);
  if (result) {
    if (result.error) {
      res.status(500);
    }
    res.json(result);
  } else {
    res.status(404);
    res.json({error: 'Menu not found', menu_id: req.params.id});
  }
};

export {getMenus, getMenusById, postMenu, putMenu, deleteMenu};
