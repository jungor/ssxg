var express = require('express');
var Club = require('../models/Club');
var User = require('../models/User');
var Activity = require('../models/Activity');

var router = express.Router();

var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect('/');
  }
};

module.exports = function(passport) {

  /*
  获取注册页面
  */ 
  router.get('/signup', function(req, res) {
    // body...
  });


  /*
  发送注册信息, 成功后跳转到活动浏览页面
  */
  router.post('/signup', function(req, res) {
    // body...
  })


  /* 
  获取登录界面
  */
  router.get('/signin', function(req, res) {
    // body...
  });


  /*
  发送登录信息，如果是管理员帐号则跳转到社团管理页面
  否则到活动浏览页面
  */
  router.post('/signin', function(req, res) {
    // body...
  })


  /*
  获取活动浏览页面，也是首页，游客可进
  */
  router.get('/', function(req, res) {
    // body...
  })


  /*
  获取活动详情页面, 游客可进
  */
  router.get('/activity/:act_id', function(req, res) {
    // body...
  })


  /*
  获取社团浏览页面，游客可进
  */
  router.get('/club', function(req, res) {
    // body...
  })


  /*
  获取社团详情页面，游客可进
  */
  router.get('/club/:club_id', function(req, res) {
    // body...
  })


  /*
  获取社团管理页面，只有该社团管理员可进
  */
  router.get('/club/:club_id/manage', function(req, res) {
    // body...
  })


  /*
  获取活动发布页面， 只有该社团管理员可进
  */
  router.get('/club/:club_id/publish', function(req, res) {
    // body...
  })


  /*
  发送要发布的活动信息
  */
  router.post('/club/:club_id/publish', function(req, res) {
    // body...
  })
};