import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app =  express();
dotenv.config();



app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//routes are reached by going to localhost:5000/posts/....
app.use('/posts', postRoutes);

//mongoDB connection
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`) ) )
        .catch( (error) => console.log(error.message));
