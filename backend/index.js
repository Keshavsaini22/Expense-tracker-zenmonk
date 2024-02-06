const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')

const UserModel = require('./model/User')
const app = express()
const port = 5000
const url = "mongodb+srv://keshavsainikesu:Imhater369@cluster0.yy3go80.mongodb.net/?retryWrites=true&w=majority"
app.use(cookieParser());
app.use(express.json());
app.use(express.text())
app.use(express.urlencoded({ extended: true }));


try {
    mongoose.connect(url);
    console.log("connected to mongodb")
}
catch (error) {
    console.error(error);
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/signin', async (req, res) => {
    const { name,
        email,
        password,
        income,
        expense } = req.body
    // console.log(req.body)
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json("Email already exist");
        }
        const newUser = await UserModel.create({ name, email, password, income, expense })
        console.log(newUser);
        res.status(200).json(newUser)
    }
    catch (e) {
        res.status(500).json(e)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})