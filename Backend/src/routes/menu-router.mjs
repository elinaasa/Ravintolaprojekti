// menuRouter.js
import express from 'express';
import {
  deleteMenu,
  getMenus,
  getMenusById,
  postMenu,
  putMenu,
} from '../controllers/menu-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';
import {body} from 'express-validator';

const menuRouter = express.Router();

menuRouter
  .route('/')
  .get(getMenus)
  .post(
    authenticateToken,
    body('name').isLength({min: 3}),
    body('description').isLength({max: 255}),
    body('diet').isLength({min: 3}),
    postMenu
  );

menuRouter
  .route('/:menu_id')
  .get(getMenusById)
  .put(
    authenticateToken,
    body('name').isLength({min: 3}),
    body('description').isLength({max: 255}),
    body('diet').isLength({min: 3}),
    putMenu
  )
  .delete(authenticateToken, deleteMenu);

export default menuRouter;
