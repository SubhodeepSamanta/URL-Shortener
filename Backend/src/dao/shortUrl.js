import shortUrl from "../models/shortUrl.model.js"

export const saveShortUrl= (url,shorturl, userId)=>{
    const urlSchema = new shortUrl({
        full_url:url,
        short_url:shorturl
    })
    if(userId){
        urlSchema.user=userId;
    }
    return urlSchema.save();
}

export const getShortUrl= async (shorturl)=>{
    return await shortUrl.findOneAndUpdate({short_url:shorturl},{$inc:{clicks:1}},{new:true})
}

export const getCustomShortUrl= async (slug)=>{
    return await shortUrl.findOne({short_url:slug});
}