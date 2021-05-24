
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Users from "../models/users.model.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await Users.findOne({ email });

        if (!existingUser) return res.status(404).json( { message: 'User doesn\'t exist' })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

        const token = jwt.sign({ email: existingUser.email, id: existingUser.set._id }, 'test', { expiresIn: '1h'});

        res.status(200).json( { result: existingUser, token }) 

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}


export const signup = async (req, res) => {
    const { username, email, password, passwordConfirm } = req.body

    try {
        const existingUser = await Users.findOne( { email });

        if (existingUser) return res.status(404).json( { message: 'User already exists' })

        if (password !== passwordConfirm) return res.status(400).json({ message: 'Passwords don\'t match' })

        const hashedPassword = await bcrypt.hash(password, 12)
        const hashedPasswordConfirm = await bcrypt.hash(passwordConfirm, 12)

        const result = await Users.create({ username: `${username}`, email, password: hashedPassword, passwordConfirm: hashedPasswordConfirm })

        const token = jwt.sign({ username: result.username, email: result.email, id: result._id }, 'test', { expiresIn: '1h'});
        
        res.status(200).json( { result, token }) 

    } catch(error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}



// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// const Users = require('../models/users.model.js')

// module.exports.signin = async function(req, res) {
//     const { email, password } = req.body

//     try {
//         const existingUser = await Users.findOne({ email });

//         if (!existingUser) return res.status(404).json( { message: 'User doesn\'t exist' })

//         const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

//         if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

//         const token = jwt.sign({ email: existingUser.email, id: existingUser.set._id }, 'test', { expiresIn: '1h'});

//         res.status(200).json( { result: existingUser, token }) 

//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong' }) 
//     }
// }




// module.exports.signup = async function(req, res) {
//     const { username, email, password, passwordConfirm } = req.body

//     try {
//         const existingUser = await Users.findOne( { email });

//         if (existingUser) return res.status(404).json( { message: 'User already exists' })

//         if(password !== passwordConfirm) return res.status(400).json({ message: 'Passwords don\'t match' })

//         const hashedPassword = await bcrypt.hash(password, 12)

//         const result = await Users.create({ username, email, password: hashedPassword })

//         const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h'});
        
//         res.status(200).json( { result: result, token }) 

//     } catch(error) {
//         res.status(500).json({ message: 'Something went wrong' }) 
//     }
// }