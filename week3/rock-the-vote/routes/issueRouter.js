const Issue = require('../models/Issue');
const express = require('express');
const issueRouter = express.Router();

issueRouter
    // Get All
    .get('/', (req, res, next) => {
        Issue.find((err, issues) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        })
    })
  
    //Get One
    .get('/:userId', (req, res, next) => {
        Issue.find({user: req.params.userId}, (err, issues) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        })
    })

    //Add new
    .post('/', (req, res, next) => {
        const newIssue = new Issue(req.body)
        newIssue.save((err, savedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedIssue)
        })
    })

    //Likes
    .put('/like/:issueId', (req, res, next) => {
        Issue.findOneAndUpdate(
            {_id: req.params.issueId},
            { $inc: { likes: 1 } },
            {new: true},
            (err, updatedIssue) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedIssue)
            }
        )
    })

    //Find by like range
    .get('/search/bylikes/:low/:high', (req, res, next) => {
        Issue.where('likes').gte(req.params.low).lte(req.params.high).exec((err, issue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issue)
        })
    })
  
  module.exports = issueRouter