import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.get('/', (req, res) => {res.json({"name": "Wiwit"})});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});