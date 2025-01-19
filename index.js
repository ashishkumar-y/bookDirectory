require('dotenv').config();


console.log(process.env.MONGO_URI);
const express = require('express')
const app = express()
const { databaseConnection } = require('./connection/db')
const routes = require('./routes/booksRoutes')

//database connection---------------
databaseConnection(process.env.MONGO_URI)

// mongodb://localhost:27017/bookDirectoryData

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//--------routes----------------->
app.use('/api', routes)



//---------server setup-------------->

const PORT = process.env.PORT || 3004;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server started locally at port:${PORT}`);
    });
}

module.exports = (req, res) => {
    app(req, res);  // Vercel uses this to forward requests to the Express app
};


// app.listen(PORT, (err) => {
//     if (err) {
//         console.log(`server failed: ${err}`);
//     } else {
//         console.log(`server started at port:${PORT}`);
//     }
// })