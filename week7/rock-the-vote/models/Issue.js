//related to the user that created it
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const issueSchema = new Schema({
    newIssue: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
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

module.exports = mongoose.model('Issue', issueSchema)