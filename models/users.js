const mongoose = require("mongoose");
// const ENCRYPTION = require('../utilities/encryption');

const OBJECT_ID = mongoose.Schema.Types.ObjectId;

var userSchema = mongoose.Schema({
    username : {
        type:String
    },
    email : {
        type:String,
        unique: true,
        require : true
    },
    password : {
        type:String,
        require : true
    },
    isAdmin : {
        type:Boolean,
        require : true
    },
    isCommentBlocked : {
        type:Boolean
    },
    commentCount : {
        type:Number
    },
    category:{
        type:OBJECT_ID,
            ref: "Category"
    },
    cart : {
        type:OBJECT_ID,
        ref:"Cart"
    
    },
    favoriteBooks : [
        {
            type:OBJECT_ID,
            ref: "Book"
        }
    ],
    role : [
        {
            type:OBJECT_ID,
            ref: "Role"
        }
    ],
    receipt : [
        {
            type:OBJECT_ID,
            ref:"Receipt"
    }]
});

userSchema.method({
    authenticate:  function (password) {
        let hashedPassword = ENCRYPTION.generateHashedPassword(this.salt, password);

        if (hashedPassword === this.password) {
            return true;
        }
        return false;
    }
});
const user = mongoose.model('User', userSchema);
module.exports = user;