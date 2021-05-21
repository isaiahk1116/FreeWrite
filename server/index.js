import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import writingRoutes from './routes/writings.js';

const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cors());

app.use('/writings', writingRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);