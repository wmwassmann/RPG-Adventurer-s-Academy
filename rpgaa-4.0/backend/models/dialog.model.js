
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const dialogs = new Schema({
    dialogBlock: {
        LineOne: {
            type: String,
         
            required: false,
        },
        LineTwo: {
            type: String,

            required: false,
        },
        LineThree: {
            type: String,

            required: false,
        },
        LineFour: {
            type: String,

            required: false,
        },
        LineFive: {
            type: String,

            required: false,
        },
        LineSix: {
            type: String,

            required: false,
        },
        LineSeven: {
            type: String,

            required: false,
        },
        LineEight: {
            type: String,

            required: false,
        },
    }

}, {
    timestamps: false,
});

const Dialogs = mongoose.model('Dialogs', dialogs);

export default Dialogs;




// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const characterSchema = new Schema({
//     username: { type: String, required: false },
//     characterName: { type: String, required: false },
//     gender: { type: String, required: false },
//     alignment: { type: String, required: false },
//     race: { type: String, required: false },
//     charClass: { type: String, required: false },
//     good: { type: Number, required: false },
//     evil: { type: Number, required: false },
//     lawful: { type: Number, required: false },
//     chaotic: { type: Number, required: false },




// }, {
//     timestamps: false,
// });

// const Character = mongoose.model('Character', characterSchema);

// module.exports = Character;

