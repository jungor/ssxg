var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    phoneNumber: Number,
    email: String
});

mongoose.model("User", userSchema);