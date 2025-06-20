import express from 'express'
import { shortUrlController } from '../controllers/shortUrl.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/',shortUrlController);

export default router;