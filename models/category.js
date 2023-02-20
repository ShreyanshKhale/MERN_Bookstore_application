const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryname: { type: String, require:true},
    discount: { type: Number, require:true},
});

const category = mongoose.model('Category', categorySchema);
module.exports = category;