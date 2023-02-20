const mongoose = require('mongoose');

const OBJECT_ID = mongoose.Schema.Types.ObjectId;

const receiptSchema = mongoose.Schema({
    user: { type: OBJECT_ID, ref: 'User' },
    productsInfo: [],
    totalPrice: { type: Number, default: 0 },
    creationDate: { type: Date, default: Date.now }
});

const receipt = mongoose.model('Receipt', receiptSchema);

module.exports = receipt;