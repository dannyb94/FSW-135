const express = require('express');
const inventoryRouter = express.Router();
//const { v4: uuidv4 } = require('uuid');
const items = require('../models/Inventory')


//Router
inventoryRouter
    .get('/', (req, res) => {
        items.find((err, data) => {
            if(err){
                res.status(500);
                return next(err);
            } else {
                return res.status(200).send(data);
            }
        })
    })

    //Parameter
    .get('/:item')

    //Query
    .get('/search/type')

module.exports = inventoryRouter;