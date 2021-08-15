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
    }/*,
    active_ind: {
        type: Boolean,
        required: true,
        default: 1
    },
    insert_dt: {
        type: Date,
        required: true,
        default : Date.now
    },
    insert_id: {
        type: String,
        required: true
    }*/
})

module.exports = mongoose.model('Inventory', inventorySchema)