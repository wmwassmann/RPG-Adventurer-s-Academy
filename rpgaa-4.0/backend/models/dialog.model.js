
import mongoose from 'mongoose'



const dialogs = mongoose.Schema({
        characterName: {
            type: String,         
            required: false,
        },
        playerAlignment: {
            type: String,
            required: false
        },
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
        }
    

}, {
    timestamps: false,
});

var Dialogs = mongoose.model('Dialogs', dialogs);

export default Dialogs;


