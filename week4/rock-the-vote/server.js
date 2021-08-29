const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');

const PORT = 2000

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Connection
mongoose.connect('mongodb://localhost:27017/Votedb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to DB')
)

//Routes
app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ['HS256']}));
app.use('/api/users', require('./routes/userRouter'));
app.use('/api/issues', require('./routes/issueRouter'));
app.use('/api/comments', require('./routes/commentRouter'));

//Error Handling
app.use((err, req, res, next) => {
    if(err.name === "Unauthorized Error"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})