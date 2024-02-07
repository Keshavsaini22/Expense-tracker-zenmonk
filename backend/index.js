const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')

const TransactionModel = require('./model/Transaction')
const UserModel = require('./model/User')
const app = express()
const port = 5000
const url = "mongodb+srv://keshavsainikesu:Imhater369@cluster0.yy3go80.mongodb.net/?retryWrites=true&w=majority"
app.use(cookieParser());
app.use(express.json());
app.use(express.text())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:3000"],  //eh jo likhya this is to get data from cookie
    methods: ['POST', 'GET'],
    credentials: true
}));

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
    console.log(req.body)
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

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // console.log("req.body",req.body)
    try {
        const user = await UserModel.find({ email })
        // console.log("user",user[0].email)
        if (user[0].password === password) {
            console.log("valid user in route")
            const token = jwt.sign({ ID: user._id }, 'jwt-key')
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({
                user: user,
                msg: "Successful"
            })
        }
        else {
            res.status(400).json({ msg: "the password is incorrect" })
        }
    }
    catch (e) {
        res.status(401).json(e)
    }
})


app.post('/addtransaction', async (req, res) => {

    try {
        console.log(req.body)      
        const transaction = await TransactionModel.create({ ...req.body });
        console.log("transaction", transaction)
        res.status(200).json(transaction)
    } catch (e) {
        console.log('e: ', e.message);
        console.log('e.message: ', e.message);
        res.status(500).json(e.message)
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})