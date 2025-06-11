import { getCustomShortUrl, saveShortUrl } from "../dao/shortUrl.js";
import { generateNanoId } from "../utils/generateNanoId.js";

export const createShortUrlWithoutUser = async (url)=>{
    const shorturl= await generateNanoId(7)
    await saveShortUrl(url,shorturl);
    return shorturl;
}

export const createShortUrlWithUser = async (url,userId,slug=null)=>{
    const shorturl= slug || await generateNanoId(7);
    const exist= await getCustomShortUrl(slug);
    if(exist) throw new Error("Custom url already exists");
    await saveShortUrl(url,shorturl,userId);
    return shorturl;
}