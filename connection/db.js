const mongoose = require("mongoose")

const databaseConnection = (URL) => {
    return mongoose.connect(URL).then((data) => {
        console.log(`MongoDB connected`);
    }).catch((err) => {
        console.log(`failed to connect to MongoDb`)
    })
}

module.exports = { databaseConnection }