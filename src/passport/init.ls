require! ['./login', './signup', '../models/user']

module.exports = (passport)-> 
  #将user的ID序列化为session
  passport.serialize-user (user, done)->
    done null, user._id

  #通过ID寻找user, 存储为req.user
  passport.deserialize-user (id, done)->
    user.find-by-id id, (error, user)!->
      done error, user

  login passport
  signup passport
