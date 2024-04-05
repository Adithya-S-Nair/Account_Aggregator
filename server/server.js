import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;

import authRoute from './routes/authRoute.js'
import accountDetailRoute from './routes/accountDetailsRoute.js'

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
})
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(cookieParser())

// Use the routes
app.use('/api/auth', authRoute);
app.use('/api/accountdetail', accountDetailRoute);


// Listen to port
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});  