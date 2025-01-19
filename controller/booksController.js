const Books = require('../models/BooksModel')

//-------------- add new book -------------------------
module.exports.AddBooks = (req, res) => {
    const request = req.body;
    const newData = new Books({
        bookName: req.body.bookName,
        author: req.body.author,
        genres: req.body.genres,
        publishedDate: req.body.publishedDate
    })
    newData.save().then((docs) => {
        return res.status(200).json({
            success: true,
            message: 'new record inserted',
            Book_Details: docs
        })
    }).catch((err) => {
        return res.status(404).json({
            success: false,
            message: 'error in inserting new Book',
            Error: `error ${err}`
        })
    })
}

// -----------view all books record---------------------------
module.exports.viewAllBooks = (req, res) => {
    Books.find().then((docs) => {
        return res.status(200).json({
            success: true,
            message: 'Success in fetching books Record',
            total_books: docs.length,
            Books_list: docs
        })
    }).catch((err) => {
        return res.status(404).json({
            success: false,
            message: 'Error in fetching Books Record',
            Error: `error ${err}`
        })
    })
}

//------ view book by ID
module.exports.getByBookName = (req, res) => {
    const data = (req.params.bookId);

    if (!data) {
        return res.status(400).json({
            success: false,
            message: 'Book name is required',
        });
    }

    Books.findOne({ _id: data }).then((docs) => {
        if (!docs) {
            res.status(404).json({
                success: false,
                message: 'No book found with the provided name',
            })
        } 
            return res.status(200).json({
                success: true,
                message: 'Book found successfully',
                Book_Details: docs
            })
        
    }).catch((err) => {
        return res.status(500).json({
            success: false,
            message: 'Error in fetching Books Record',
            error: err.message,
        })
    })
};


//----------------------------remove the book data-------------
module.exports.removeBookRecord = (req, res) => {
    const request = req.body
    Books.findOneAndDelete({ bookName: req.body.bookName }).then((docs) => {
        if (!docs) {
            res.status(404).json({
                success: false,
                message: 'No Book found',
            })
        } else {
            return res.status(200).json({
                success: true,
                message: 'Success in Removing books Record'
            })
        }
    }).catch((err) => {
        return res.status(404).json({
            success: false,
            message: 'Error in fetching Books Record',
            Error: `error ${err}`
        })
    }
    )
}


// -------update the book data------------------

module.exports.updateBook = async (req, res) => {
    const bookId = req.params.id; // Extract the ID from the URL
    const updateData = req.body; // Get the update data from the request body

    try {
        // Find the book by ID and update it with the new data
        const updatedBook = await Books.findByIdAndUpdate(bookId, updateData, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validations are applied
        });

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: 'No book found with the provided ID',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            updatedBook,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error updating the book',
            error: err.message,
        });
    }
};