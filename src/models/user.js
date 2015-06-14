var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var bcryptNodejs = require('bcrypt-nodejs');
var hash = function(password){
  return bcryptNodejs.hashSync(password, bcryptNodejs.genSaltSync(10), null);
};
var userSchema = new Schema({
	userName: String,
	userPassword: String,
    realName: String,
    phoneNumber: String,
    email: String,
    identity: String  //该字段如果是普通用户则是'common_user', 如果是管理员则是所属club的name
});

var User = mongoose.model("User", userSchema);
module.exports = User;

// add admin
User.findOne({userName: 'admin'}, function(error, user) {
  if (error) {
    return console.log("Error in login: ", error);
  }
  if (!user) {
    var admin = new User({
      userName: 'admin',
      userPassword: hash('123'),
      realName: 'admin',
      phoneNumber: '15521052303',
      email: '287150625@qq.com',
      identity: 'system_manager'
    });
    return admin.save(function(error){
      if (error) {
        console.log("Error in saving admin: ", error);
        throw error;
      } else {
        console.log("Admin registration success");
        return done(null, admin);
      }
    });
  }
})
