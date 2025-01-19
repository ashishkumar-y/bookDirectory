
const express = require('express')
const app = express()
const { databaseConnection } = require('./connection/db')
const routes = require('./routes/booksRoutes')

//database connection---------------
databaseConnection(`mongodb+srv://ashishkumar:Ashish123@books-directory-db.gcbc9.mongodb.net/?retryWrites=true&w=majority&appName=books-directory-db`)

// mongodb://localhost:27017/bookDirectoryData

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//--------routes----------------->
app.use('/', routes)



//---------server setup-------------->
const PORT = process.env.PORT || 3004;
app.listen(PORT, (err) => {
    if (err) {
        console.log(`server failed: ${err}`);
    } else {
        console.log(`server started at port:${PORT}`);
    }
})