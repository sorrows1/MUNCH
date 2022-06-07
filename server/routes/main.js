const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const alertMessage = require('../helpers/messenger');
const Promotion = require('../models/Promotion');

const moment = require('moment');

router.get('/', (req, res) => {
	const title = 'Video Jotter';
	res.render('index', { title: title }) // renders views/index.handlebars
});

// User Login Route
router.get('/showLogin', (req, res) => {
	res.render('user/login');	// Activates views/user/login.handlebar
});

// shows the register page
router.get('/showRegister', (req, res) => {
	res.render('user/register'); 	// Activates views/user/register.handlebar
});

let error = 'Error msg using error!!!';
let errors = [{ text: 'First error msg using errors' }, { text: 'Second error msg using errors' }, { text: 'Third error msg using errors' }];

// shows the about page
router.get('/about', (req, res) => {
	const author = 'Robert Lim';

	alertMessage(res, 'success', 'This is an important message', 'fas fa-sign-in-alt', true);
	alertMessage(res, 'danger', 'Unauthorised access', 'fas fa-exclamation-circle', false);

	let success_msg = 'Success message using success_msg!!';
	let error_msg = 'Error message using error_msg!!';

	res.render('about', {	// Activates views/about.handlebar, passing author as a variable
		success_msg: success_msg,
		error_msg: error_msg,
		error: error,
		errors: errors,
		author: author
	});
});

// Logout User
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/test', (req, res) => {
	res.render('test');
});

// Assignment Test Codes

function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2)
		month = '0' + month;
	if (day.length < 2)
		day = '0' + day;

	return [year, month, day].join('-');
}

router.get('/CreatePromotion', (req, res) => {

	const today = new Date();
	let tommorow = new Date(today);
	let endDate = new Date(today);
	tommorow.setDate(tommorow.getDate() + 1);
	endDate.setDate(endDate.getDate() + 2);

	tommorow = formatDate(tommorow);
	endDate = formatDate(endDate);

	res.render('CreatePromotion', {
		defaultStartDate: tommorow,
		endDate: endDate
	});
});

router.post('/createPromotions', (req, res) => {

	let { PromotionName, EmailLimit, PromotionAmount, RedemptionPerPerson, TotalRedemption, PromotionCode, Purpose, StartOfPromotion, EndOfPromotion } = req.body;

	ValidPromo = 'TRUE';

	Promotion.findOne({ where: { PromotionCode: PromotionCode } })
		.then(promotion => {
			if (promotion) {
				res.render('CreatePromotion', {
					error: promotion.PromotionCode + ' already registered',
					...req.body
				})
			}
			else {

				Promotion.create({ PromotionName, EmailLimit, RedemptionPerPerson, TotalRedemption, PromotionAmount, PromotionCode, Purpose, StartOfPromotion, EndOfPromotion, ValidPromo })
					.then(promotion => {
						alertMessage(res, 'success', promotion.PromotionName, 'fas fa-sign-in-alt', true);
						res.redirect('/test')
					})

			}
		})



});

router.get('/listPromotion', (req, res) => {
	Promotion.findAll({
		order: [
			['id', 'ASC']
		],
		raw: true
	})
		.then((promotion) => {
			// pass object to listVideos.handlebar
			res.render('listPromotion', {
				promotion: promotion
			});
		})
		.catch(err => console.log(err));
});

router.get('/updatePromotions/:id', (req, res) => {

	Promotion.findOne({
		where: {
			id: req.params.id
		}
	}).then((promotion) => {

		res.render('editPromotion', {
			promotion
		});
	}).catch(err => console.log(err));
});



router.put('/saveEditedPromotion/:id', (req, res) => {

	let Purpose = req.body.Purpose.slice(0, 1999);
	let StartOfPromotion = moment(req.body.StartOfPromotion, 'DD/MM/YYYY')
	let EndOfPromotion = moment(req.body.EndOfPromotion, 'DD/MM/YYYY')

	Promotion.update({
		...req.body,
		Purpose,
		StartOfPromotion,
		EndOfPromotion
	}, {
		where: {
			id: req.params.id
		}
	}).then((promotion) => {
		res.redirect('/listPromotion')
	}).catch(err => console.log(err))
});


module.exports = router;
