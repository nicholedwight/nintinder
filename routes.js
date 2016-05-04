var express = require('express');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.send("hello world");
  })

router.route('/user1')
  .get(function(req, res) {
    res.render('user.hbs', {
      title: 'user 1',
      user: 'Nichole',
      bumpins: [{name: 'Alex', time: '3 minutes ago', url: '/assets/alex.jpg', id: 2},
                {name: 'Richard', time: '27 minutes ago', url: '/assets/richard.jpg', id: 3},
                {name: 'Ben', time: 'yesterday', url: '/assets/ben.jpg', id: 4}]
    });
  })

router.route('/user2')
  .get(function(req, res) {
    res.render('user.hbs', {
      title: 'user 2',
      user: 'Alex',
      bumpins: [{name: 'Nichole', time: '3 minutes ago', url: '/assets/nichole.jpg', id: 1}]
    });
  })

router.route('/user3')
  .get(function(req, res) {
    res.render('user.hbs', {
      title: 'user 3',
      user: 'Richard',
      bumpins: [{name: 'Nichole', time: '3 minutes ago', url: '/assets/nichole.jpg', id: 1}]
    });
  })

router.route('/user4')
  .get(function(req, res) {
    res.render('user.hbs', {
      title: 'user 4',
      user: 'Ben',
      bumpins: [{name: 'Nichole', time: '3 minutes ago', url: '/assets/nichole.jpg', id: 1}]
    });
  })


module.exports = router;
