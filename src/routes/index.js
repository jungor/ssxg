var express = require('express');
/*var Club = require('../models/club');*/
var User = require('../models/user');
/*var Activity = require('../models/Activity');*/

var router = express.Router();

var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect('/login');
  }
};

module.exports = function(passport) {

  /*
  获取注册页面
  */ 
  router.get('/signup', function (req, res) {
    res.render('signup', {
      user:req.user
    });
  });


  /*
  发送注册信息, 成功后跳转到活动浏览页面
  */
  router.post('/signup',
    passport.authenticate('signup',{failureRedirect: '/signup'}), function (req, res) {
      res.redirect('/');
  });

  /* 
  获取登录界面
  */
  router.get('/login', function (req, res) {
    res.render('login', {
      user: req.user
    });
  });


  /*
  发送登录信息，如果是管理员帐号则跳转到社团管理页面
  否则到活动浏览页面
  */
  router.post('/login',
    passport.authenticate('login', {failureRedirect: '/signup'}), function (req, res) {
      // req.user.identity === 'common_user' ? res.redirect('/') : res.redirect('/club/' + req.user.identity + '/manage');
      if (req.user.identity === 'common_user') {
        res.redirect('/')
      } else {
        res.redirect('/club/' + req.user.identity + '/manage')
      }
  });

  /* 用户登出 */
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  /*
  获取活动浏览页面，也是首页，游客可进
  数据请求:
  1.homepage.jade
  2.req.user
  3.所有的活动的_id,名字,图片,举办时间,点赞数

  ////////说明: 这里有个问题没想好,怎样判断已登录用户对一个活动是否点过赞,不知师兄有没有什么好的想法
  */
  router.get('/', function(req, res) {
    res.render('homepage', {
      user: req.user
    });
  });


  /*
  获取活动详情页面, 游客可进
  数据发送:
  活动的_id

  数据请求:
  1.eventDetail.jade
  2.req.user
  3.该活动的名字,时间,地点,类型,主办社团的名字,主办社团的_id,标签,报名人数,点赞数,评论数,活动详情描述
  4.该活动的所有评论(包括管理员的回复)

  ////////说明: 1.目前标签只有"公益时"和"体育章"两种
               2.目前考虑每个人可以发评论,但只有管理员能回复评论回复而且每条评论只能有一条回复
  */
  router.get('/activity/:act_id', function(req, res) {
    res.render('eventDetail', {
      user:req.user
    });
  });


  /*
  获取社团浏览页面，游客可进

  数据请求:
  1.homepage.jade
  2.req.user
  3.所有的社团的_id,名字,图片,该社团所有活动的总点赞数
  */
  router.get('/club', function(req, res) {
    res.render('homepage', {
      user: req.user
    });
  });


  /*
  获取社团详情页面，游客可进

  数据发送:
  社团的_id

  数据请求:
  1.clubDetail.jade
  2.req.user
  3.该社团的名字, 描述, logo
  4.该社团所有活动的_id, 名字, 举办时间, 点赞数目
  */
  router.get('/club/:club_id', function(req, res) {
    // body...
  });


  /*
  获取社团管理页面，只有该社团管理员可进

  数据发送:
  社团的_id

  数据请求:
  1.clubManage.jade
  2.req.user
  3.该社团的_id,名字,描述,logo
  */
  router.get('/club/:club_id/clubmanage', function(req, res) {
    res.render('clubManager', {
      user: req.user
    });
  });


  /*
  获取活动发布页面， 只有该社团管理员可进

  数据发送:
  社团的_id

  数据请求:
  1.newEvent.jade
  2.req.user
  3.该社团的_id, 名字, logo
  */
  router.get('/club/:club_id/newevent', function(req, res) {
    res.render('newEvent', {
      user: req.user
    });
  });


  /*
  发送要发布的活动信息, 只有该社团管理员可进

  数据发送:
  1.社团的_id
  2.新活动的名字,时间,地点,类型,标签,图片,描述
  */
  router.post('/club/:club_id/newevent', function(req, res) {

  });


  /*
  显示该社团收到的所有评论

  数据发送:
  社团的_id

  数据请求:
  1.clubComment.jade
  2.req.user
  3.该社团的_id, 名字, logo
  */
  router.get('/club/:club_id/clubcomment', function(req, res) {
    res.render('clubComment', {
      user: req.user
    });
  });


  /*
  显示该社团的所有活动, 管理员可进

  数据发送:
  社团的_id

  数据请求:
  1.manageEvent.jade
  2.req.user
  3.该社团的_id, 名字, logo
  4.该社团所有活动的_id, 名字, 时间, 点赞数, logo
  */
  router.get('/club/:club_id/manageevent', function(req, res) {
    res.render('manageEvent', {
      user: req.user
    });
  });


  /*
  获取修改已发布的活动页面,管理员可进

  数据发送:
  社团的_id
  活动的_id

  数据请求:
  1.specificManageEvent.jade
  2.req.user
  3.该社团的_id, 名字, logo
  3.该活动的_id, 名称, 时间, 类型, 标签, 描述
  */
  router.get('/club/:club_id/:act_id/specificmanageevent', function(req, res) {
    res.render('specificManageEvent', {
      user: req.user
    });
  });


  /*
  发送修改已发布的活动页面,管理员可进

  数据发送:
  1.社团的_id, 活动的_id
  2.活动的名称, 时间, 类型, 标签, 海报图片, 描述

  ////////说明:发送的信息可能为空,为空的不要修改
  */
  router.post('/club/:club_id/:act_id/specificmanageevent', function(req, res) {

  });


  /*
  获取修改社团数据页面,管理员可进

  数据发送:
  社团的_id

  数据请求:
  1.modifyClubData.jade
  2.req.user
  3.社团的_id, 名字, logo
  */
  router.get('/club/:club_id/modifyclubdata', function(req, res) {
    res.render('clubDetail', {
      user: req.user
    });
  });

  /*
  发送要修改的社团数据页面,管理员可进

  数据发送:
  1.社团的_id
  2.社团的logo, 社团的描述

  ////////说明:发送的信息可能是空的,先判断,如果为空则不修改
  */
  router.post('/club/:club_id/modifyclubdata', function(req, res) {
  });

  return router;
};