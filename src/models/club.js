var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    phoneNumber: Number,
    email: String
});

var commentSchema = new Schema({
    name: String,
    content: String,
    time: String
});

var activitySchema = new Schema({
    name: String,
    sponsor: String,
    time: String,
    location: String,
    type: String,
    tag: String,
    joinedPerson: [personSchema],
    likedPerson: [personSchema],
    comment: [commentSchema],
    detail_description: String,
    photos: [String],
    club_id: String
});

var clubSchema = new Schema({
    name: String,
    logo: String,
    description: String,
    comment_to_club: [commentSchema],
    activity: [activitySchema]
});

exports.club = mongoose.model("Club", clubSchema);
exports.activity = mongoose.model("Activity", activitySchema);