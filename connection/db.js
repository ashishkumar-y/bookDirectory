const mongoose = require("mongoose")

const databaseConnection = async (URL) => {
    return mongoose.connect(URL).then((data) => {
        console.log(`MongoDB connected`);
    }).catch((err) => {
        console.log(`failed to connect to MongoDb`)
    })
}


databaseConnection('mongodb+srv://ashishkumar:Ashish123@books-directory-db.gcbc9.mongodb.net/?retryWrites=true&w=majority&appName=books-directory-db')



module.exports = { databaseConnection }