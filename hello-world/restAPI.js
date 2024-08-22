const express = require('express');
const users = require('./MOCK_DATA.json');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const userRouter = require('./routers/user');
const authRouter = require('./routers/auth');

const { connectDB } = require('./connection');
const { middlewareFunction } = require('./middlewares');
const { retrictloginUser } = require('./middlewares/auth');

const app = express();

//connect db
connectDB('mongodb://127.0.0.1:27017/sanya-test');
//Middleware
app.use(express.urlencoded({ extended: false }));

// 2nd Middlesware
app.use(middlewareFunction());
app.use(cookieParser());

app.use('/user', retrictloginUser, userRouter);
app.use('/auth/', authRouter);


// stream
app.get('/', (req, res) => {
    const stream = fs.createReadStream('./test.txt', 'utf-8');
    stream.on("data", (chunk) => res.write(chunk));
    stream.on("end", ()=> res.end());
})

app.listen(3000, () => { console.log('server started') });