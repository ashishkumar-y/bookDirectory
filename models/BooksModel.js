const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: [true, "Book name cant be Empty"],
        unique: [true, "this Book Already Exist"]
    },
    author: {
        type: [String],
        required: [true, "Author name cant be empty"]
    },
    genres: {
        type: [String],
        required: [true, "genres cant vbe empty"]
    },
    publishedDate: {
        type: Number,
        required: [true, "published date Cant be empty"]
    }
});

const Books = mongoose.model('Books', booksSchema);
module.exports = Books;
