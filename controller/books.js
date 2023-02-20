const book = require("mongoose").model("Book");
const user = require("mongoose").model("User");

function validateBookForm(payload) {
    let errors = {};
    let isFormValid = true;

    if (!payload || typeof payload.title !== 'string' || payload.title.trim().length === 0) {
        isFormValid = false;
        errors.title = 'Please provide title.';
    }

    if (!payload || typeof payload.author !== 'string' || payload.author.trim().length === 0) {
        isFormValid = false;
        errors.author = 'Please provide author.';
    }

    if (!payload || typeof payload.genre !== 'string' || payload.genre.trim().length === 0) {
        isFormValid = false;
        errors.genre = 'Please provide genre.';
    }

    if (!payload || isNaN(Number(payload.year))) {
        isFormValid = false;
        errors.year = 'Please provide book release year.';
    }

    if (!payload || typeof payload.description !== 'string' || payload.description.trim().length < 10) {
        isFormValid = false;
        errors.description = 'Description must be at least 10 symbols long.';
    }

    if (!payload || !payload.cover || !VALIDATOR.isURL(payload.cover)) {
        isFormValid = false;
        errors.cover = 'Please provide proper url for the book\'s cover';
    }

    if (!payload || !payload.isbn || !VALIDATOR.isISBN(payload.isbn)) {
        isFormValid = false;
        errors.isbn = 'Please provide a valid ISBN.';
    }

    if (!payload || isNaN(Number(payload.pagesCount)) || payload.pagesCount === '') {
        isFormValid = false;
        errors.pagesCount = 'Please provide number of pages.';
    }

    if (!payload || isNaN(Number(payload.price)) || Number(payload.price) < 0 || payload.pagesCount === '') {
        isFormValid = false;
        errors.price = 'Please provide book price.';
    }

    return {
        success: isFormValid,
        errors
    };
}

function validateRatingForm(payload) {
    let errors = {};
    let isFormValid = true;

    if (
        !payload
        || isNaN(Number(payload.rating))
        || !VALIDATOR.isInt(payload.rating.toString())
        || Number(payload.rating) < 1
        || Number(payload.rating) > 5
    ) {
        isFormValid = false;
        errors.price = 'Rating must be a integer number between 1 and 5.';
    }

    return {
        success: isFormValid,
        errors
    };
}

module.exports = {
    getAllBooks: (req, res) =>{
        book.findById(bookId)
        .then(books => {
            if(books.length == 0){
                return res.status(200).json({
                    message: 'No book available'
                });
            }
            else{
                return res.status(200).json({
                    message: 'No book available'
                });
            }
        })
    },
    getOneBook: (req, res) => {
        let bookId = req.params.bookId;
        book.findById(bookId)
            .then((book) => {
                if (!book) {
                    return res.status(400).json({
                        message: 'There is no book with the given id in our database.'
                    });
                }
                return res.status(200).json({
                    message: '',
                    data: book
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(400).json({
                    message: 'Something went wrong, please try again.'
                });
            });
    },
    addBook: (req, res) => {
        let book1 = req.body;

        let validationResult = levalidateBookForm(book1);

        if (!validationResult.success) {
            return res.status(400).json({
                message: 'Book form validation failed!',
                errors: validationResult.errors
            });
        }

        book.create(book1).then((newBook) => {
            return res.status(200).json({
                message: 'Book created successfully!',
                data: newBook
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },
    editBook: (req, res) => {
        let bookId = req.params.bookId;
        let editedBook = req.body;

        let validationResult = validateBookForm(editedBook);

        if (!validationResult.success) {
            return res.status(400).json({
                message: 'Book form validation failed!',
                errors: validationResult.errors
            });
        }

        book.findById(bookId).then((book1) => {
            if (!book1) {
                return res.status(400).json({
                    message: 'There is no book with the given id in our database.'
                });
            }

            book1.title = editedBook.title;
            book1.author = editedBook.author;
            book1.genre = editedBook.genre;
            book1.year = editedBook.year;
            book1.description = editedBook.description;
            book1.cover = editedBook.cover;
            book1.isbn = editedBook.isbn;
            book1.pagesCount = editedBook.pagesCount;
            book1.price = editedBook.price;
            book1.save();

            return res.status(200).json({
                message: 'Book edited successfully!',
                data: book
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    }

}
