import express, { urlencoded } from 'express'
import {nanoid} from 'nanoid'
import connectDB from './src/config/mongo.config.js'
import shortUrl from './src/models/shortUrl.model.js';

const app= express();
app.use(express.json());
app.use(urlencoded({extended:true}));
connectDB();

const PORT=process.env.PORT;

app.post('/api/create',(req,res)=>{
    const shorturl= nanoid(7);
    const {url} =req.body;
    const urlSchema = new shortUrl({
        full_url:url,
        short_url:shorturl
    })
    urlSchema.save();
    res.send(shorturl);
})

app.get('/:id',async (req,res)=>{
    const shorturl= req.params.id;
    const url= await shortUrl.findOne({short_url:shorturl});
    if(url){
        res.redirect(301,url.full_url);
    }else{
        res.status(404).send("Not Found");
    }
})

app.listen(PORT,()=>{
    console.log(`server is runnning on port: ${PORT}`);
})