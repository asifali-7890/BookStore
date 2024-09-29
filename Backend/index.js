import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRouter from './route/book.route.js';
import signup from './route/user.route.js';
import cors from 'cors';


dotenv.config();
const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODB
const app = express();
app.use(cors());
app.use(express.json());

try {
    mongoose.connect(URL);
    console.log("MongoDB Successfully connected...");
} catch (error) {
    console.log("Error connecting");
}

app.get('/', (req, res) => {
    res.send('Welcome here...');
})

app.use('/book', bookRouter);
app.use('/user', signup);

app.listen(PORT, (req, res) => {
    console.log('listening on port number...', PORT)
});


