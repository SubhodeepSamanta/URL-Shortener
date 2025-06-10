import { getShortUrl, saveShortUrl } from "../dao/shortUrl.js";
import shortUrl from "../models/shortUrl.model.js";
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";
import { generateNanoId } from "../utils/generateNanoId.js";

export const shortUrlController= async (req,res)=>{
    const {url} = req.body;
    const shorturl = await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL+ process.env.PORT+ "/" + shorturl);
}

export const redirectController = async (req,res)=>{
    const shorturl= req.params.id;
    const url= await getShortUrl(shorturl);
    if(url){
        res.redirect(301,url.full_url);
    }else{
        res.status(404).send("Not Found");
    }
}