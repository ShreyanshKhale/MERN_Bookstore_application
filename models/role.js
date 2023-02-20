const mongoose = require('mongoose');

const cart = require("./cart").model("Cart");
const user = require("./users").model("User");
// const ENCRYPTION = require('../utilities/encryption');

const OBJECT_ID = mongoose.Schema.Types.ObjectId;

const roleSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    users: [{ type: OBJECT_ID, ref: 'User' }]
});

const role = mongoose.model('Role', roleSchema);

module.exports = role;

// module.exports.init = () => {
//     role.findOne({ name: 'Admin' }).then((role) => {
//         if (!role) {
//             role.create({ name: 'Admin' }).then((newrole) => {
//                 let salt = ENCRYPTION.generateSalt();
//                 let passwordHash = ENCRYPTION.generateHashedPassword(salt, 'admin');
//                 let adminUser = {
//                     username: 'admin',
//                     email: 'admin@admin.com',
//                     salt: salt,
//                     password: passwordHash,
//                     isAdmin: true,
//                     roles: [newrole._id]
//                 };

//                 user.create(adminUser).then((user) => {
//                     newrole.users.push(user._id);
//                     newrole.save();

//                     cart.create({ user: user._id }).then((cart) => {
//                         user.cart = cart._id;
//                         user.save();
//                     });
//                 });
//             });
//         }
//     });

//     role.findOne({ name: 'user' }).then((role) => {
//         if (!role) {
//             role.create({ name: 'user' }).then((newrole) => {
//                 let salt = ENCRYPTION.generateSalt();
//                 let passwordHash = ENCRYPTION.generateHashedPassword(salt, '123');
//                 let newUser = {
//                     username: 'jeliozver',
//                     email: 'jeliozver@gmail.com',
//                     salt: salt,
//                     password: passwordHash,
//                     roles: [newrole._id]
//                 };

//                 user.create(newUser).then((nu) => {
//                     newrole.users.push(nu._id);
//                     newrole.save();
//                     cart.create({ user: nu._id }).then((cart) => {
//                         nu.cart = cart._id;
//                         nu.save();
//                     });
//                 });
//             });
//         }
//     });
// };