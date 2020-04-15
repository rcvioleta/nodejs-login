module.exports = async (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}

	res.render('home', {
		message: 'Please login to continue!'
	});
};
