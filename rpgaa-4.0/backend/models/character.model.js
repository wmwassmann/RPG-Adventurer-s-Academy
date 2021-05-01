const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    username: { type: String, required: true },
    gender: { type: String, required: true },
    alignment: { type: String, required: true },
    race: { type: String, required: true },
    charClass: { type: String, required: true },
}, {
    timestamps: true,
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;