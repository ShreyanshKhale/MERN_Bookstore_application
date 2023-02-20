const mongoose = require('mongoose');


const OBJECT_ID = mongoose.Schema.Types.ObjectId;

const cartSchema = mongoose.Schema({
    user: { type: OBJECT_ID, ref: 'User' },
    books: [{ type: OBJECT_ID, ref: 'Book' }],
    totalPrice: { type: Number, default: 0 }
});

const cart = mongoose.model('Cart', cartSchema);
module.exports = cart;