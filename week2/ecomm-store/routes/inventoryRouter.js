const express = require('express');
const Inventory = require('../models/Inventory');
const inventoryRouter = express.Router();


//Router
inventoryRouter
    .get('/', (req, res, next) => {
        Inventory.find(/*{active_ind: 1},*/ (err, items) => {
            if(err){
                res.status(500);
                return next(err);
            } else {
                return res.status(200).send(items);
            }
        })
    })

    //Parameter
    .get('/:inventoryId', (req, res, next) => {
        const inventoryId = req.params.inventoryId
        const foundItem = items.find(item => item._id === inventoryId)
        if(foundItem){
            const error = new Error(`Item ${inventoryId} cannot be found.`)
            res.status(500)
            return next(error)
        }
        return res.status(200).send(foundItem)
    })

    //Query
    .get('/search/type', (req, res, next) => {
        const itemType = req.query.type
        if(!itemType){
            const error= new Error(`Please input the type of item you're searching for.`)
            res.status(500)
            return next(error)
        }
        const types = Inventory.filter(item => item.type === itemType)
        res.status(200).send(types)
    })

    .post('/', (req, res, next) => {
        const newInventoryItem = new Inventory(req.body)
        newInventoryItem.save((err, savedInventoryItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedInventoryItem)
        })
    })

    .delete('/:inventoryId', (req, res, next) => {
        Inventory.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedItems) => {
            if(err){
                res.status(500)
                return next(error)
            }
            return res.status(200).send(`Deleted item ${deletedItems.brand} from the database.`)
        })
    })
    
    .put('/:inventoryId', (req, res, next) => {
        Inventory.findOneAndUpdate(
            {_id: req.params.inventoryId},
            req.body,
            {new: true},
            (err, updateInventory) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updateInventory)
            }
        )
    })

module.exports = inventoryRouter;