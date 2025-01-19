const express = require('express');
const app = express();
const { databaseConnection } = require('./connection/db');
const routes = require('./routes/booksRoutes');

// Establish database connection
databaseConnection('mongodb+srv://ashishkumar:Ashish123@books-directory-db.gcbc9.mongodb.net/?retryWrites=true&w=majority&appName=books-directory-db')

// Middleware to parse URL-encoded data and JSON payloads from incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the API routes for the application
app.use('/api', routes);


const PORT = 3004;
app.listen(PORT, (err) => {
    if (err) {
        console.log(`Server failed to start: ${err}`);
    } else {
        console.log(`Server started at port: ${PORT}`);
    }
});
