import express, { urlencoded } from 'express'
import {nanoid} from 'nanoid'
import connectDB from './src/config/mongo.config.js'
import shortUrl from './src/models/shortUrl.model.js';
import shortUrlrouter from './src/routes/shortUrl.routes.js'
import { redirectController } from './src/controllers/shortUrl.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors';
import authRoutes from './src/routes/auth.routes.js';

const app= express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));
connectDB();

const PORT=process.env.PORT;

app.use('/api/create',shortUrlrouter);
app.get('/:id',redirectController);
app.use('/api/auth',authRoutes);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server is runnning on port: http://localhost:${PORT}`);
})