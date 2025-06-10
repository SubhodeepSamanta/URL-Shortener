import express from 'express'
import { shortUrlController } from '../controllers/shortUrl.controller.js';

const router = express.Router();

router.post('/',shortUrlController);

export default router;