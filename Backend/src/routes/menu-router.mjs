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

/**
 * @api {get} /menus/ Get All Menus
 * @apiGroup Menus
 * @apiDescription Retrieves a list of all menus.
 * @apiName GetAllMenus
 *
 * @apiSuccess {Object[]} data List of menu items.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *        "menu_id": 1,
 *        "name": "Menu 1",
 *        "description": "Description of Menu 1",
 *        "diet": "Vegetarian"
 *      },
 *      {
 *        "menu_id": 2,
 *        "name": "Menu 2",
 *        "description": "Description of Menu 2",
 *        "diet": "Vegan"
 *      }
 *    ]
 */

/**
 * @api {get} /menus/:menu_id Get Menu by ID
 * @apiGroup Menus
 * @apiDescription Retrieves a specific menu by its ID.
 * @apiName GetMenuByID
 *
 * @apiParam {Number} menu_id Unique identifier of the menu.
 *
 * @apiSuccess {Object} data Specific menu item.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "menu_id": 1,
 *      "name": "Menu 1",
 *      "description": "Description of Menu 1",
 *      "diet": "Vegetarian"
 *    }
 *
 * @apiError 404 Menu not found.
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "error": "Menu not found."
 *    }
 */

/**
 * @api {post} /menus/ Add New Menu
 * @apiGroup Menus
 * @apiDescription Adds a new menu.
 * @apiName AddNewMenu
 *
 * @apiParam {String} name Menu's name (minimum length: 3).
 * @apiParam {String} description Menu's description (maximum length: 255).
 * @apiParam {String} diet Menu's diet type (minimum length: 3).
 *
 * @apiSuccess {String} message Message confirming the addition.
 * @apiSuccess {Number} menu_id Unique identifier of the new menu.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created
 *    {
 *      "message": "New menu added.",
 *      "menu_id": 12
 *    }
 *
 * @apiError 400 Bad Request if validation fails.
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "error": "Validation failed."
 *    }
 */

/**
 * @api {put} /menus/:menu_id Update Menu
 * @apiGroup Menus
 * @apiDescription Updates an existing menu by its ID.
 * @apiName UpdateMenu
 *
 * @apiParam {Number} menu_id Unique identifier of the menu.
 * @apiParam {String} name Menu's name (minimum length: 3).
 * @apiParam {String} description Menu's description (maximum length: 255).
 * @apiParam {String} diet Menu's diet type (minimum length: 3).
 *
 * @apiSuccess {String} message Message confirming the update.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Menu updated."
 *    }
 *
 * @apiError 400 Bad Request if validation fails.
 * @apiError 404 Not Found if the menu does not exist.
 */

/**
 * @api {delete} /menus/:menu_id Delete Menu
 * @apiGroup Menus
 * @apiDescription Deletes a specific menu by its ID.
 * @apiName DeleteMenu
 *
 * @apiParam {Number} menu_id Unique identifier of the menu.
 *
 * @apiSuccess {String} message Message confirming the deletion.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Menu deleted."
 *    }
 *
 * @apiError 404 Not Found if the menu does not exist.
 */

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
