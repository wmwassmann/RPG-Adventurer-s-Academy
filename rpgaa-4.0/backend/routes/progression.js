import express from 'express';

import { updateCharacter, deleteCharacter } from '../controllers/progression.js'

import auth from '../middleware/auth.js'

const router = express.Router();


router.patch('/:id', auth, updateCharacter)
router.delete('/:id', auth, deleteCharacter)


export default router



// const express = require('express');

// const { updateCharacter, deleteCharacter } = require('../controllers/progression.js')

// const auth = require('../middleware/auth.js')

// const router = express.Router();


// router.get('/:id', auth, updateCharacter)
// router.post('/:delete', auth, deleteCharacter)





// module.exports = router