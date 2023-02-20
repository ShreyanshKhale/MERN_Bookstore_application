const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: true },
    author: { 
        type: String, 
        required: true },
    genre: { 
        type: String, 
        required: true },
    year: { 
        type: String,
        required: true },
    description: { 
        type: String, 
        required: true },
    cover: { 
        type: String, 
        required: true },
    isbn: { 
        type: String, 
        required: true },
    pagesCount: { 
        type: Number, 
        required: true },
    price: { 
        type: Number, 
        required: true },
    creationDate: { 
        type: Date, 
        default: Date.now },
    currentRating: { 
        type: Number, 
        default: 0 },
    ratingPoints: { 
        type: Number, 
        default: 0 },
    ratedCount: { 
        type: Number, 
        default: 0 },
    ratedBy: [
        { 
            type: Object, 
            ref: "User" 
        }
    ],
    purchasesCount: { 
        type: Number, 
        default: 0 
    },
    comments: [
        { 
            type: Object, 
            ref: "Comment" 
        }
    ]
});


const book = mongoose.model('Book', bookSchema);

module.exports = book;
