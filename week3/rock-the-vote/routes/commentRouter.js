const Comment = require('../models/Comment');
const express = require('express');
const commentRouter = express.Router();

commentRouter
    //Get All
    .get('/', (req, res, next) => {
        Comment.find((err, comms) => {
            if(err){
                res.status(500);
                return next(err);
            } else {
                return res.status(200).send(comms);
            }
        })
    })

    //Get by User
    .get('/:userId', (req, res, next) => {
        Comment.find({user: req.params.userId}, (err, comms) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comms)
        })
    })

    //New Comment
    .post('/', (req, res, next) => {
        const newComment = new Comment(req.body)
        newComment.save((err, savedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedComment)
        })
    })

    //Delete Comment
    .delete(':/commentId', (req, res, next) => {
        Comment.findOneAndDelete(
            { _id: req.params.commentId }, (err, deletedComments) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Deleted comment ${deletedComments.newComment} from the database.`)
            }
        )
    })

    //Edit Comment
    .put(':/commentId', (req, res, next) => {
        Comment.findOneAndUpdate(
            { _id: req.params.commentId},
            req.body,
            {new: true},
            (err, updateComment) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updateComment)
            }
        )
    })

module.exports = commentRouter