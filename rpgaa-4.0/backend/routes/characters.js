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
    const characterName = req.body.characterName;
    const gender = req.body.gender;
    const alignment = req.body.alignment;
    const race = req.body.race;
    const charClass = req.body.charClass;
    const good = req.body.good;
    const evil = req.body.evil;
    const lawful = req.body.lawful;
    const chaotic = req.body.chaotic;
    
    // const school = req.body.school;
    // const divinity = req.body.divinity;
    // const arcane = req.body.arcane;
    // const nature = req.body.nature;
    // const vocation = req.body.vocation;
    // const majorPaladin = req.body.majorPaladin;
    // const majorCleric = req.body.majorCleric;
    // const majorMonk = req.body.majorMonk;
    // const majorWizard = req.body.majorWizard;
    // const majorSorcerer = req.body.majorSorcerer;
    // const majorWarlock = req.body.majorWarlock;
    // const majorRanger = req.body.majorRanger;
    // const majorBarbarian = req.body.majorBarbarian;
    // const majorDruid = req.body.majorDruid;
    // const majorFighter = req.body.majorFighter;
    // const majorBard = req.body.majorBard;
    // const majorRogue = req.body.majorRogue;

    const newCharacter = new Character({
        username,
        characterName,
        gender,
        alignment,
        race,
        charClass,
        good,
        evil,
        lawful,
        chaotic,

        // school,
        // divinity,
        // nature,
        // arcane,
        // vocation,
        // majorPaladin,
        // majorCleric,
        // majorMonk,
        // majorWizard,
        // majorSorcerer,
        // majorWarlock,
        // majorRanger,
        // majorBarbarian,
        // majorDruid,
        // majorFighter,
        // majorBard,
        // majorRogue
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
            character.characterName = req.body.characterName;
            character.gender = req.body.gender;
            character.alignment = req.body.alignment;
            character.race = req.body.race;
            character.charClass = req.body.charClass;
            character.good = req.body.good;
            character.evil = req.body.evil;
            character.lawful = req.body.lawful;
            character.chaotic = req.body.chaotic;

            character.save()
                .then(character => res.json('Character updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})



module.exports = router;

