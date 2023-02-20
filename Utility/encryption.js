const CRYPTO = require('crypto');

module.exports = CRYPTO;
module.exports = {
    generateSalt: () => {
        return CRYPTO.randomBytes(128).toString('base64');
    },

    generateHashedPassword: (salt, password) => {
        return CRYPTO.createHmac('sha256', salt).update(password).digest('hex');
    }
};