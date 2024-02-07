const mongoose = require('mongoose')
const UserModel = require('./User')
const TransactionSchema = new mongoose.Schema({
    name: { type: String, require: true },
    category: { type: String },
    type: { type: String },
    amount: { type: Number },
    date: { type: Date },
    created: { type: Date, default: Date.now },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: UserModel },
})

module.exports = mongoose.model("transaction", TransactionSchema)