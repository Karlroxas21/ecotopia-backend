const mongoose = require('mongoose');

const { Schema } = mongoose;

const account = new Schema({
        username: String,
        password: String,
        email: String,
        full_name: String,
        phone_number: String,
        role: String,
        status: String,
        emailToken: String,
        default: String
},
{collection: 'login'});

const ManageAccountModel = mongoose.model('ManageAccount', account);

module.exports = ManageAccountModel;