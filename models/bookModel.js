const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
})

const bookModal = mongoose.model('book', bookSchema)

module.exports = bookModal