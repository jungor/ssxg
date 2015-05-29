var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	studentID: String,
	userPassword: String,
    name: String,
    phoneNumber: Number,
    email: String
});

mongoose.model("User", userSchema);