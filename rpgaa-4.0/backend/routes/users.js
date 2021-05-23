
const router = require('express').Router();
let User = require('../models/user.model');
const { signin, signup } = require('../controllers/users')


// handles http user requests
router.route('/').get((req, res) => {
    User.find()
    // success = find user from database
    .then(users => res.json(users))
    // failure = throw error
    .catch(err => res.status(400).json('Error: ' + err));
})

// Posts any username requests
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;
    // Creates new user
    const newUser = new User({username, email, password, passwordConfirm});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/signin', signin).post((req, res) => {
    console.log('success')
})
router.route('/signup', signup).post((req, res) => {
    console.log('success')
})

module.exports = router;