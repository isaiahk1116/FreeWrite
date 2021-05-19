import express from 'express';

import { getWritings, createWriting, updateWriting, deleteWriting } from '../controllers/writings.js';

const router = express.Router();

router.get('/', getWritings);
router.post('/', createWriting);
router.patch('/:id', updateWriting);
router.delete('/:id', deleteWriting);

export default router;