const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    longUrl:{
        type: String,
        required: true
    },
    shortUrl:{
        type: String,
        required: true,
    },
    clicks : {
        type: Number,
        required: true,
        default: 0
    }
})

const Url = mongoose.model('Url',UrlSchema)

module.exports = Url