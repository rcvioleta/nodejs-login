const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	password: {
		type: String,
		required: false,
		trim: true,
		minLength: 8
	}
});

userSchema.statics.findOneOrCreate = async function(payloads) {
	let user = await this.findOne({ name: payloads.name });
	if (!user) {
		user = await this.create({ name: payloads.name });
		await user.save();
	}
	return user;
};

module.exports = mongoose.model('user', userSchema);
