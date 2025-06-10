import { getShortUrl } from "../dao/shortUrl.js"
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js"

export const shortUrlController = async (req, res, next) => {
  try {
    const { url } = req.body;
    const shorturl = await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL + process.env.PORT + "/" + shorturl);
  } catch (err) {
    next(err);
  }
};

export const redirectController = async (req, res, next) => {
  try {
    const shorturl = req.params.id;
    const url = await getShortUrl(shorturl);
    if (url) {
      res.redirect(301, url.full_url);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (err) {
    next(err);
  }
};
