const mongoose = require('mongoose');

const OBJECT_ID = mongoose.Schema.Types.ObjectId;

const commentSchema = mongoose.Schema({
    user: { type: OBJECT_ID, ref: 'User' },
    book: { type: OBJECT_ID, ref: 'Book' },
    content: { type: String, required: true },
    creationDate: { type: Date, default: Date.now }
});

const comment = mongoose.model('Comment', commentSchema);

module.exports = comment;