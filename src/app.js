const express = require('express');
const path = require('path');

const passport = require('passport');

require('dotenv').config();
require('./database/mongoose');

const app = express();
const port = process.env.PORT || 3000;

// routes
const AuthRoutes = require('./routes/auth');
const WebRoutes = require('./routes/web');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// app middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(
	require('express-session')({
		secret: process.env.SESSION_TOKEN,
		resave: false,
		saveUninitialized: true
		// cookie: { secure: true }
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use(WebRoutes);
app.use(AuthRoutes);

app.get('*', (req, res, next) => {
	res.render('404_page');
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
