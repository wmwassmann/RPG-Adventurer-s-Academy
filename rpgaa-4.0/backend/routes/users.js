
import express from 'express';
const router = express.Router();


import User from '../models/users.model.js'
import { signin, signup } from '../controllers/users.js';


router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.post("/signin", signin)  
router.post("/signup", signup)

// module.exports = router;

export default router;



// const express = require('express');

// const router = express.Router()
// import Users from '../models/users.model'

// const { signin, signup } = require('../controllers/users.js')

// handles http user requests
// router.route('/').get((req, res) => {
//     Users.find()
//     // success = find user from database
//     .then(users => res.json(users))
//     // failure = throw error
//     .catch(err => res.status(400).json('Error: ' + err));
// })

// Posts any username requests
// router.route('/add').post((req, res) => {
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
//     const passwordConfirm = req.body.passwordConfirm;
//     // Creates new user
//     const newUser = new User({username, email, password, passwordConfirm});

//     newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// })

// console.log(router.post('/signin', signin))