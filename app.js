if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express');
const app = express();
const cors = require('cors');

// routes
const HomeRoute = require('./routes/home.routes')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

// routes middleware
app.use('/', HomeRoute)

module.exports = app;