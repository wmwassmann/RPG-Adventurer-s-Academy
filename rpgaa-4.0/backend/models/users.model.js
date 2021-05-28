import mongoose from 'mongoose'



const usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    passwordConfirm: {
        type: String,
        required: true,
    },

    character: {
        characterName: { type: String, default: 'Slate', required: false, },
        gender: { type: String, default: 'N/A', required: false, },
        race: { type: String, default: 'Human', required: false, },


        alignment: {
            trendingAlignment: { type: String, default: 'True Neutral', required: false, },
            trendingAlignmentStats: {
                good: { type: Number, default: 1, required: false, },
                evil: { type: Number, default: 1, required: false, },
                lawful: { type: Number, default: 1, required: false, },
                chaotic: { type: Number, default: 1, required: false, },
            }

        },


        charClass: {
            selectedSchool: { type: String, default: 'Pleb', required: false, },
            trendingSchool: {
                divinity: { type: Number, default: 0, required: false, },
                nature: { type: Number, default: 0, required: false, },
                arcane: { type: Number, default: 0, required: false, },
                vocation: { type: Number, default: 0, required: false, },
            },
            divinity: {
                majorPaladin: { type: Number, default: 0, required: false, },
                majorCleric: { type: Number, default: 0, required: false, },
                majorMonk: { type: Number, default: 0, required: false, },
            },
            nature: {
                majorWizard: { type: Number, default: 0, required: false, },
                majorBard: { type: Number, default: 0, required: false, },
                majorWarlock: { type: Number, default: 0, required: false, },
            },
            arcane: {
                majorRanger: { type: Number, default: 0, required: false, },
                majorBarbarian: { type: Number, default: 0, required: false, },
                majorDruid: { type: Number, default: 0, required: false, },
            },
            vocation: {
                majorFighter: { type: Number, default: 0, required: false, },                
                majorSorcerer: { type: Number, default: 0, required: false, },
                majorRogue: { type: Number, default: 0, required: false, }

            }
        },
        
        abilityScores: {
            strength: { type: Number, default: 10, required: false, },
            dexterity: { type: Number, default: 10, required: false, },
            constitution: { type: Number, default: 10, required: false, },
            intelligence: { type: Number, default: 10, required: false, },
            wisdom: { type: Number, default: 10, required: false, },
            charisma: { type: Number, default: 10, required: false, },
        },

        currentNpc: {
            argusTimbers: { type: String, default: 'Argus Timbers', required: false }
        }




    }
}, {
    timestamps: true,
});

export default mongoose.model('Users', usersSchema)




// const mongoose = require('mongoose');
// const { isEmail } = require('validator')
// const bcrypt = require('bcrypt')


// const Schema = mongoose.Schema;


// const usersSchema = new Schema({
//     username: { 
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         minlength: 3
//     },
//     email: { 
//         type: String,
//         required: [
//             true, 
//             'Email address is required'
//         ],
//         unique: true,
//         lowercase: true,
//         trim: true,
//         validate: [
//             isEmail, 
//             'Please enter a valid email'
//         ],
//         minlength: 3,
//     },
//     password: { 
//         type: String,
//         required: [
//             true, 
//             'Password is required'
//         ],
//         unique: true,
//         trim: true,
//         minlength: [
//             6, 
//             'Minimum password length is 6 characters'
//         ]
//     },
//     passwordConfirm: { 
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         minlength: [
//             6, 
//             'Minimum password length is 6 characters'
//         ]
//     },
// }, {
//     timestamps: true,
// });


// const Users = mongoose.model('Users', usersSchema);

// module.exports = Users;


// usersSchema.virtual('passwordConfirmation')
//     .get(function() {
//       return this._passwordConfirmation;
//     })
//     .set(function(value) {
//         this._passwordConfirmation = value;
//     });
// usersSchema.pre('save', async function (next) {
//     if (this.password !== this.passwordConfirm) {
//         this.invalidate('passwordConfirmation', 'Pasword does not match')
//     }

//     console.log('user about to be created and saved', this);
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt)
//     this.passwordConfirm = await bcrypt.hash(this.passwordConfirm, salt)  
//     next()

// })
