  
import express from 'express';
import mongoose from 'mongoose';

import Characters from '../models/character.model.js';

const router = express.Router();

export const updateCharacter = async (req, res) => {
    const { id } = req.params;
    const { good, evil, lawful, chaotic } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedCharacters = { good, evil, lawful, chaotic, _id: id };

    await Characters.findByIdAndUpdate(id, updatedCharacters, { new: true });

    res.json(updatedCharacters);
}

export const deleteCharacter = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Characters.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;





// const express = require('express');
// const mongoose = require('mongoose')

// const characters = require('../models/characters.js');

// const router = express.Router();



// module.exports =  updateCharacter = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedCharacter = { good, evil, lawful, chaotic, _id: id };

//     await characters.findByIdAndUpdate(id, updatedCharacter, { new: true });

//     res.json(updatedCharacter);
// }

// module.exports =  deleteCharacter = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await characters.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }

// module.exports = router;