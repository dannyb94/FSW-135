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
    .post('/:issue', (req, res, next) => {
        req.body.issue = req.params.issue
        req.body.user = req.user._id
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

    //Like Comment
    // .put('/like/:commentId', (req, res, next) => {
    //     Comment.findOneAndUpdate(
    //         { _id: req.params.commentId},
    //         { $inc: { likes: 1 } },
    //         {new: true},
    //         (err, updateComment) => {
    //             if(err){
    //                 res.status(500)
    //                 return next(err)
    //             }
    //             return res.status(201).send(updateComment)
    //         }
    //     )
    // })

    //Find by like range
    // .get('/search/bylikes/:low/:high', (req, res, next) => {
    //     Comment.where('likes').gte(req.params.low).lte(req.params.high).exec((err, comms) => {
    //         if(err){
    //             res.status(500)
    //             return next(err)
    //         }
    //         return res.status(200).send(comms)
    //     })
    // })

module.exports = commentRouter