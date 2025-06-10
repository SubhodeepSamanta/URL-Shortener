import { saveShortUrl } from "../dao/shortUrl.js";
import { generateNanoId } from "../utils/generateNanoId.js";

export const createShortUrlWithoutUser = async (url)=>{
    const shorturl= await generateNanoId(7)
    saveShortUrl(url,shorturl);
    return shorturl;
}

export const createShortUrlWithUser = async (url,userId)=>{
    const shorturl= await generateNanoId(7)
    saveShortUrl(url,shorturl,userId);
    return shorturl;
}