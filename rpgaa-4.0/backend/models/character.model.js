const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    username: { type: String, required: true },
    characterName: { type: String, required: true },
    gender: { type: String, required: true },
    alignment: { type: Number, required: true },
    race: { type: String, required: true },
    charClass: { type: String, required: true },
    good: { type: Number, required: true },
    evil: { type: Number, required: true },
    lawful: { type: Number, required: true },
    chaotic: { type: Number, required: true },
}, {
    timestamps: true,
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;