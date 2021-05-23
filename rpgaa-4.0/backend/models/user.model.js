const mongoose = require('mongoose');
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

 
const userSchema = new Schema({
    username: { 
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: { 
        type: String,
        required: [
            true, 
            'Email address is required'
        ],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [
            isEmail, 
            'Please enter a valid email'
        ],
        minlength: 3,
    },
    password: { 
        type: String,
        required: [
            true, 
            'Password is required'
        ],
        unique: true,
        trim: true,
        minlength: [
            6, 
            'Minimum password length is 6 characters'
        ]
    },
    passwordConfirm: { 
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [
            6, 
            'Minimum password length is 6 characters'
        ]
    },
}, {
    timestamps: true,
});

userSchema.virtual('passwordConfirmation')
    .get(function() {
      return this._passwordConfirmation;
    })
    .set(function(value) {
        this._passwordConfirmation = value;
    });
userSchema.pre('save', async function (next) {
    if (this.password !== this.passwordConfirm) {
        this.invalidate('passwordConfirmation', 'Pasword does not match')
    }

    console.log('user about to be created and saved', this);
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    this.passwordConfirm = await bcrypt.hash(this.passwordConfirm, salt)  
    next()

})

const User = mongoose.model('User', userSchema);

module.exports = User;