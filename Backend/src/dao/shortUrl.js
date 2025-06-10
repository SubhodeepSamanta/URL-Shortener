import shortUrl from "../models/shortUrl.model.js"

export const saveShortUrl= (url,shorturl, userId)=>{
    const urlSchema = new shortUrl({
        full_url:url,
        short_url:shorturl
    })
    if(userId){
        urlSchema.user=userId;
    }
    urlSchema.save();
}

export const getShortUrl= async (shorturl)=>{
    return await shortUrl.findOne({short_url:shorturl})
}