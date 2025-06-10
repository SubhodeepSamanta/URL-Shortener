import express from 'express'
import { nanoid } from 'nanoid';
import shortUrl from '../models/shortUrl.model.js';
import { shortUrlController } from '../controllers/shortUrl.controller.js';

const router = express.Router();

router.post('/',shortUrlController);

export default router;