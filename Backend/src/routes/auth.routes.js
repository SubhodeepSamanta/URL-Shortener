import express from 'express'
import { loginController, registerController } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router= express.Router();

router.post('/register',registerController);
router.post('/login',loginController);
router.get('/me', authMiddleware, (req, res) => {
  res.json({ user: { id: req.user._id, name: req.user.name, email: req.user.email } })
})

export default router;

