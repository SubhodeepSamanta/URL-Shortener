import express, { urlencoded } from 'express'
import connectDB from './src/config/mongo.config.js'
import shortUrlrouter from './src/routes/shortUrl.routes.js'
import { redirectController } from './src/controllers/shortUrl.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors';
import authRoutes from './src/routes/auth.routes.js';
import cookieParser from 'cookie-parser'
import { attachUser } from './src/utils/attachUser.js';
import urlsRoutes from './src/routes/urls.routes.js'

const app= express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
connectDB();

const PORT=process.env.PORT;
app.use(attachUser);
app.use('/api/urls', urlsRoutes)
app.use('/api/create',shortUrlrouter);
app.get('/:id',redirectController);
app.use('/api/auth',authRoutes);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server is runnning on port: http://localhost:${PORT}`);
})