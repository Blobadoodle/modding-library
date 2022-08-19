const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, index: { unique: true}},
    password: {type: String, required: true}
});

module.exports = new mongoose.model('User', UserSchema);