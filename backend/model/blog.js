const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Number,
        default: () => Date.now()
    }
})

const blogModel = new mongoose.model('vlog', Schema)
module.exports = blogModel