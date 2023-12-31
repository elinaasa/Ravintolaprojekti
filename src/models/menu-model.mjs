// TODO: Create a menu model the same way as the user model has been created in user-model.mjs
import {promisePool} from '../utils/database.mjs';

const fetchAllMenus = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Menus');
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const fetchMenuById = async id => {
  try {
    const sql = `SELECT * FROM Menus WHERE menu_id=?`;
    const params = [id];
    console.log('Executing query:', sql, 'with parameters:', params);
    const [rows] = await promisePool.query(sql, params);
    console.log('rows', rows);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const addMenu = async menu => {
  const {name, description, diet} = menu;
  const sql = `INSERT INTO Menus (name, description, diet) VALUES (?, ?, ?)`;
  const params = [name, description, diet];
  try {
    const rows = await promisePool.query(sql, params);
    console.log('rows', rows);
    return {message: 'Menu added'};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const updateMenuById = async (id, menu) => {
  const {name, description, diet} = menu;
  const sql = `UPDATE Menus SET name=?, description=?, diet=? WHERE menu_id=?`;
  const params = [name, description, diet, id];
  try {
    const rows = await promisePool.query(sql, params);
    console.log('rows', rows);
    return {message: 'Menu updated'};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const deleteMenuById = async id => {
  const sql = `DELETE FROM Menus WHERE menu_id=?`;
  const params = [id];
  try {
    const result = await promisePool.query(sql, params);
    console.log('rows', result);
    return {message: 'Menu deleted', menu_id: result[0].insertId};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {fetchAllMenus, fetchMenuById, addMenu, updateMenuById, deleteMenuById};
