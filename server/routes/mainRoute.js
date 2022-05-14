const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Video Jotter';
  res.render('index', { title: title }); // renders views/index.handlebars
});

router.get('/showLogin', (req, res) => {
  res.render('user/login');
});

router.get('/showRegister', (req, res) => {
  res.render('user/register');
});

router.get('/about', (req, res) => {
  const author = 'Robert Lim';
  let success_msg = 'Success message using success_msg!!';
  let error_msg = 'Error message using error_msg!!';
  let error = 'Error msg using error';
  let errors = [{ text: 'hi' }, { text: 'hi' }, { text: 'hi' }];

  res.render('about', {
    success_msg,
    error_msg,
    author,
    error,
    errors,
  });
});

// Logout User
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
