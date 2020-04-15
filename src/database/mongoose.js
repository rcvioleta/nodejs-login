const mongoose = require('mongoose');

const uname = process.env.DB_USERNAME;
const pword = process.env.DB_PASSWORD;
const url = `mongodb+srv://${uname}:${pword}@nodejs-test-login-1gtrj.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(url, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
	console.log('MongoDB is now connected');
});
