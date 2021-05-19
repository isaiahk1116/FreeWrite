import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import writingRoutes from './routes/writings.js';

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cors());

app.use('/writings', writingRoutes);

const CONNECTION_URL = 'mongodb+srv://isaiahkhan11:nenecastillo99@cluster0.rlhco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);