const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { unique: true, type: String },
    password: String,
    income: Number,
    expense: Number
})

module.exports = mongoose.model("users", UserSchema)