

import express from 'express';

import Narration from '../models/narration.model.js';


const router = express.Router();

export const addNarration = async (req, res) => {
    const {  lines } = req.body

    try {        

        const result = await Narration.create({ lines })

        res.status(200).json({ result }) 
        

    } catch(error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}




export const getNarration = async (req, res) => {


    // const { id } = req.body;

    try {
        const narrationBlock = await Narration.find();

       

        res.status(200).json({ result: narrationBlock }) 
        console.log("controller", narrationBlock)

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}


export default router