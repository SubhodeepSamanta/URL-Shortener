import { getShortUrl } from "../dao/shortUrl.js"
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shortUrl.service.js"

export const shortUrlController = async (req, res, next) => {
  try {
    const { url, slug } = req.body;
    let shorturl;
    if (req.user) {
      shorturl = await createShortUrlWithUser(url, req.user._id, slug && slug.trim() ? slug.trim() : undefined);
    } else {
      shorturl = await createShortUrlWithoutUser(url);
    }
    res.status(200).json({ shorturl: process.env.APP_URL + process.env.PORT + "/" + shorturl });
  } catch (err) {
    next(err);
  }
};




export const redirectController = async (req, res, next) => {
  try {
    const shorturl = req.params.id;
    const url = await getShortUrl(shorturl);
    if (url) {
      res.redirect(302, url.full_url);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (err) {
    next(err);
  }
};
