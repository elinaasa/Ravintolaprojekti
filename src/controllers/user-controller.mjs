import {validationResult} from 'express-validator';
import {
  fetchAllUsers,
  fetchUserById,
  addUser,
  updateUserById,
  deleteUserById,
} from '../models/user-model.mjs';
import bcrypt from 'bcryptjs';

/**
 *
 * @param {*} req
 * @param {*} res
 */

const getUsers = async (req, res) => {
  const limit = req.query.limit;
  const userItems = await fetchAllUsers();
  res.json(userItems);
};

/**
 *
 * @param {*} req
 * @param {*} res
 */

const getUsersById = async (req, res) => {
  console.log('getUsersById', req.params);
  const result = await fetchUserById(req.params.id);

  if (result) {
    if (result.error) {
      res.status(500);
    }
    res.json(result);
  } else {
    res.status(404);
    res.json({error: 'User not found.', user_id: req.params.id});
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */

const postUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // details about errors are in errors.array()
    console.log(errors.array());
    return res.status(400).json({message: 'Validation failed'});
  }
  const newUser = req.body;
  const salt = await bcrypt.genSalt(10);
  // replace plain text password with hashed password
  newUser.password = await bcrypt.hash(newUser.password, salt);
  console.log('postUser', newUser);
  const newUserId = await addUser(newUser);
  res.status(201).json({message: 'New user added.', user_id: newUserId});
};

/**
 *
 * @param {*} req
 * @param {*} res
 */

const putUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // details about errors are in errors.array()
    console.log(errors.array());
    return res.status(400).json({message: 'Validation failed'});
  }
  const result = await updateUserById(req.params.id, req.body);
};

/**
 *
 * @param {*} req
 * @param {*} res
 */

const deleteUser = async (req, res) => {
  console.log('User deleted', req.params);
  const result = await deleteUserById('User deleted', req.params.id);
  if (result) {
    if (result.error) {
      res.status(500);
    }
    res.json(result);
  } else {
    res.status(404);
    res.json({error: 'User not found.', user_id: req.params.id});
  }
};

export {getUsers, getUsersById, postUser, putUser, deleteUser};
