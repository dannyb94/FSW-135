const express = require('express');
const User = require('../models/User');
const userRouter = express.Router();

//Router
userRouter
    //Get All
    .get('/', (req, res, next) => {
        User.find((err, users) => {
            if(err){
                res.status(500);
                return next(err)
            } else {
                return res.status(200).send(users)
            }
        })
    })

    //Get by User
    .get(':/search', (req, res, next) => {
        const {user} = req.query
        const paatern = new RegExp(user)
        User.find({name: {$regex: pattern, $options: 'a'}}, (err, users) => {
            if(err){
                res.status(500)
                return next(error)
            } else {
                return res.status(200).send(users)
            }
        })
    })

    //New User
    .post('/', (req, res, next) => {
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedUser)
        })
    })

    //Multiple New Users
    .post('/manyusers', (req, res, next) => {
        const Users = req.body
        const newUser = new Author(Users)
        User.insertMany(Users, (err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedUser)
        })
    })

    //Delete Item
    .delete(':/', (req, res, next) => {})

module.exports = userRouter;