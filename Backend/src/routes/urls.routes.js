import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import shortUrl from '../models/shortUrl.model.js'

const router = express.Router()

router.get('/', authMiddleware, async (req, res) => {
  try {
    const urls = await shortUrl.find({ user: req.user._id }).sort({ _id: -1 })
    res.json({ urls })
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch URLs' })
  }
})

export default router