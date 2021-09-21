//related to the issue it was commented on, and related to the user that created the comment
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
    newComment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: String,
        required: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
    // likes: {
    //     type: Number,
    //     default: 0
    // }
})

module.exports = mongoose.model('Comment', commentSchema)