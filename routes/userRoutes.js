// route file - routes/userRoutes.js

const express = require('express');
const userController = require('<path-to-user-controller>');

const router = express.Router();

// router-level middlewares

// GET request for getting all the users
router.get('/', userController.getUsers);

// POST request for creating a user
router.post('/', userController.createUser);

// GET request for getting the user by id
router.get('/:id', userController.getUserById);

module.exports = router;
