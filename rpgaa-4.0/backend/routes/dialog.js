
import express from 'express';
const router = express.Router();


import { addNpcLines, getDialog } from '../controllers/dialog.js';



router.get('/', getDialog)

router.post("/add", addNpcLines)  

// module.exports = router;

export default router;