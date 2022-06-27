const express = require('express');
const router = express.Router();
const alertMessage = require('../helpers/messenger');
const User = require('../models/User');
const { Op } = require('sequelize');

router.get('/listUsers', (req, res) => {
  User.findAll({
    where: {
      role: { [Op.not]: 'admin' },
    },
  }).then((users) => {
    res.render('admin/listUsers', {
      users: users,
    }); // renders views/index.handlebars
  });
});

router.get('/viewUser/:userId', (req, res) => {
  User.findOne({
    where: {
      id: req.params.userId,
    },
  }).then((user) => {
    res.render('admin/viewUser', {
      User: user,
    }); // renders views/index.handlebars
  });
});

router.get('/delete/:userId', (req, res) => {
  User.findOne({
    where: {
      id: req.params.userId,
    },
  }).then((user) => {
    let userEmail = user.email;
    user
      .destroy({
        where: {
          id: req.params.userId,
        },
      })
      .then(() => {
        //re-direct to the video list page with the appropriate success message
        alertMessage(
          res,
          'success',
          'User account ' + userEmail + ' deleted',
          'fas fa-trash-alt',
          true
        );
        res.redirect('/');
      });
  });
});


module.exports = router;
