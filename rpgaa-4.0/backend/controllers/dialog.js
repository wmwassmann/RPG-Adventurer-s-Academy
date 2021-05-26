
import express from 'express';



import Dialog from "../models/dialog.model.js";

const router = express.Router();


export const add = async (req, res) => {
    const { dialogBlock, LineOne, LineTwo, LineThree, LineFour, LineFive, LineSix, LineSeven, LineEight } = req.body

    try {        

        const result = await Dialog.create({ dialogBlock, LineOne, LineTwo, LineThree, LineFour, LineFive, LineSix, LineSeven, LineEight })

        res.status(200).json({ result }) 
        

    } catch(error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}

export const getDialog = async (req, res) => {

    const { id } = req.params

    try { 
        const block = await Dialog.findById(id)

        res.status(200).json(block)
        console.log('Success in Controller')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router