const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  username: String,
  password: String,
  status: String,
  role: String
},
{collection: 'login'}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
