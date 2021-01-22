const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    success: { type: Boolean, required: true },
    timestamp: { type: Number, required: true },
    base: { type: String, required: true },
    date: { type: String, required: true },
    rates: { type: Object, required: true }
})

module.exports = model('Currency', schema)