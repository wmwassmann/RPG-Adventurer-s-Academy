
import express from 'express';
const router = express.Router();


import { add, getDialog } from '../controllers/dialog.js';


router.get('/', getDialog)

router.post("/add", add)  



// module.exports = router;

export default router;