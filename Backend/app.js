import express from 'express'
import {nanoid} from 'nanoid'
import connectDB from './src/config/mongo.config.js';
import urlSchema from './src/models/shortUrl.model.js';

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();

app.post('/api/create',(req,res)=>{
    const {url}= req.body;
    const fullUrl= url;
    const shortUrl= nanoid(7);
    res.send(shortUrl);
    const newUrl = new urlSchema({
        full_url: fullUrl,
        short_url: shortUrl
    });
    newUrl.save();
})

app.get('/:id', async (req,res)=>{
    const shortUrl= req.params.id;
    const url= await urlSchema.findOne({short_url:shortUrl})
    if(url){
        res.redirect(url.full_url);
    }else{
        res.status(400).send("404 status");
    }
})

app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:5300`)
    console.log(`server is running on port: ${process.env.PORT}`)
})