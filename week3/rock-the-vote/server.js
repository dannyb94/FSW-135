const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = 2000

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Connection
mongoose.connect('mongodb://localhost:27017/Inventorydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to DB')
)

//Routes
app.use('/users', require('./routes/userRouter'));
app.use('/issues', require('./routes/issueRouter'));
app.use('/comments', require('./routes/commentRouter'));

//Error Handling
app.use((err, req, res) => {
    return res.status(500).send({errMsg: err.message})
})

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})