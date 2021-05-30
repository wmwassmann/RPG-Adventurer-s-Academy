
import express from 'express';
const router = express.Router();


import { addNarration, getNarration } from '../controllers/narration.js';



router.get('/', getNarration)


router.post("/add", addNarration)  


export default router;