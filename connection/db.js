const mongoose = require("mongoose")



    const databaseConnection = async (URL) => {
        if (mongoose.connection.readyState === 0) {
          await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
          console.log("MongoDB connected successfully");
        }
      };



// module.exports = { databaseConnection }


databaseConnection('mongodb+srv://ashishkumar:Ashish123@books-directory-db.gcbc9.mongodb.net/?retryWrites=true&w=majority&appName=books-directory-db')

