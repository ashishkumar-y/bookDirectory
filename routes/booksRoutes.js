const express = require('express');
const routes = express.Router()
const Books = require('../models/BooksModel')
const bookCtrl = require('../controller/booksController')


routes.get('/', bookCtrl.viewAllBooks);
routes.get('/:bookId', bookCtrl.getByBookName);
routes.post('/addBook', bookCtrl.AddBooks);
routes.delete('/removeBook', bookCtrl.removeBookRecord);

routes.put('/update/:id', bookCtrl.updateBook);


module.exports = routes;