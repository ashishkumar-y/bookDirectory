// Load environment variables from the .env file
require('dotenv').config();

// Log the MongoDB URI for debugging purposes (optional, remove in production)
console.log(process.env.MONGO_URI);

const express = require('express');
const app = express();
const { databaseConnection } = require('./connection/db');
const routes = require('./routes/booksRoutes');

// Establish database connection using the URI from the environment variables
databaseConnection(process.env.MONGO_URI);

// Middleware to parse URL-encoded data and JSON payloads from incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the API routes for the application
app.use('/api', routes);


const PORT = process.env.PORT || 3004;
app.listen(PORT, (err) => {
    if (err) {
        console.log(`Server failed to start: ${err}`);
    } else {
        console.log(`Server started at port: ${PORT}`);
    }
});
