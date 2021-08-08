const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = 4000

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

//Schema
//const Inventory = require('./models/Inventory') use in html

//Routes
app.use('/Inventory', require('./routes/inventoryRouter'));

//Error Handling
app.use((err, req, res) => {
    return res.status(500).send({errMsg: err.message})
})

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})