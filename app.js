var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var session = require("express-session");
var flash = require("connect-flash");
// var params = require("./params/params");
var bodyParser = require("body-parser");
// var setUpPassport = require("./setuppassport");
var routes = require("./routes/router");
const cors = require('cors');

var user = require("./models/users").model("User");
var book = require("./models/books").model("Book");
var role = require("./models/role").model("Role");
var comment = require("./models/comments").model("Comment");
var receipt = require("./models/receipt").model("Receipt");
var cart = require("./models/cart").model("Cart");
// var role = require("./models/users").model("Role")

var dbConnection = "mongodb://localhost:27017/BookstoreDB";

var app = express();
mongoose.connect(dbConnection, {useUnifiedTopology:true, useNewUrlParser:true})
.then( () => {

    // setUpPassport();
    book.find().then(res => {
        console.log(res);
    })

    // let doc = mongoose

    app.set("port", process.env.PORT || 3000);
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({extended:false}));
    app.use( express.static( "public" ) );
    app.use(cors());
    app.use(cookieParser());
    app.use(session({
        secret:"doemlfgddfsoi!gjdsf5684561dsf",
        resave:false,
        saveUninitialized:false
    }));
    
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    
    app.use("/", require("./routes/router"));
    
    
    app.listen(app.get("port"), function(){
        console.log("Server started on port " + app.get("port"));
    })
})
.catch(err => {
    console.log(err);
});