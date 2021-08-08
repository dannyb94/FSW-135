const mongoose = require('mongoose');
const Schema = mongoose.Schema

//thing schema
const inventorySchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)