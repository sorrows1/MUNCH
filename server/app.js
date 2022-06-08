const express = require('express');
const cors = require('cors');
const session = require('express-session');
const path = require('path');


const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const flash = require('connect-flash');
const FlashMessenger = require('flash-messenger');
const passport = require('passport');

const mainRoute = require('./routes/main');

const productRoute = require('./routes/product/product.route');
const ingredientRoute = require('./routes/product/ingredient.route');
const userRoute = require('./routes/user');
const promotionRoute = require('./routes/promotion');
const reviewRoute = require('./routes/review');

const app = express();


const MySQLStore = require('express-mysql-session');

const authenticate = require('./config/passport');
authenticate.localStrategy(passport);

app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.use(cookieParser());

app.use(session({
	key: 'munchdb_session',
	secret: 'yjyyjjmyjm',
	store: new MySQLStore({
		host: 'localhost',
		port: 3306,
		user: 'munchuser',
		password: 'password',
		database: 'munchdb',
		clearExpired: true,
		checkExpirationInterval: 900000,
		expiration: 900000,
	}),
	resave: false,
	saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(FlashMessenger.middleware);

app.use(function (req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});

const {formatDate, radioCheck, replaceCommas} = require('./helpers/hbs');
const Promotion = require('./models/Promotion');


app.engine('handlebars', exphbs.engine({
	helpers: {
		formatDate: formatDate,
		radioCheck: radioCheck,
		replaceCommas: replaceCommas
	},
	defaultLayout: 'main' 
}));


app.use('/', mainRoute)
app.use('/api/v1/products', productRoute);
app.use('/api/v1/ingredients', ingredientRoute);
app.use('/user', userRoute);
app.use('/promotion', promotionRoute);
app.use('/review', reviewRoute)


module.exports = app;
