const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	brand: {
		type: String
	},
	logo: {
		type: String,
	},
	picture: {
		type: String
	}
});

module.exports = User = mongoose.model('user', UserSchema)