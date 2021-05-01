const router = require('express').Router();
let Character = require('../models/character.model');
const { route } = require('./users');

// handles http characters requests
router.route('/').get((req, res) => {
    Character.find()
        // success = find character from database
        .then(characters => res.json(characters))
        // failure = throw error
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const gender = req.body.gender;
    const alignment = req.body.alignment;
    const race = req.body.race;
    const charClass = req.body.charClass;

    const newCharacter = new Character({
        username,
        gender,
        alignment,
        race,
        charClass,
    });

    newCharacter.save()
        .then(() => res.json('New Character Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Character.findById(req.params.id)
        .then(character => res.json(character))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Character.findByIdAndDelete(req.params.id)
        .then(() => res.json('Character deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
})

// UPDATE IS INCREDIBLY IMPORTANT AS THIS IS WHERE ALL CHARACTER INFORMATION WILL BE STORED AND UPDATED!

// USE THIS ANY TIME WE WANT TO CHANGE A CHARACTERS PATH IN ANY WAY SHAPE OR FORM BASED ON WHAT DECISIONS THE PLAYER MAKES!

router.route('/update/:id').post((req, res) => {
    Character.findById(req.params.id)
    .then(character => {

        character.username = req.body.username;
        character.gender = req.body.gender;
        character.alignment = req.body.alignment;
        character.race = req.body.race;
        character.charClass = req.body.charClass;

        character.save()
            .then(character => res.json('Character updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
        .catch(err => res.status(400).json('Error: ' + err));
})



module.exports = router;

