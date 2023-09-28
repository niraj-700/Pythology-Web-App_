const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/myReprotInfo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => {
    console.log('DB connected')
})

// routes
app