var express = require("express");
var passport = require("passport");
const mongoose = require("mongoose")
var book = require("../models/books");


var router = express.Router();

router.get("/", function (req, res) {
    book.find().then(a => {
        console.log(a);
        res.render("books", {books: a});
        res.render("index");
    })
    // console.log("hello I'm on the start page");
    
 });

 module.exports = router;