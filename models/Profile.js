const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user',
	},
	media: {
		type: String,
	},
	desc: {
		type: String,
	},
	brandMedia: {
		type: String,
	},
	brand: {
		type: String,
	},
	skills: {
		type: [String],
	},
	status: {
		type: String,
	},
	bio: {
		type: String,
	},
	social: {
		youtube: {
			type: String,
		},
		twitter: {
			type: String,
		},
		facebook: {
			type: String,
		},
		linkedIn: {
			type: String,
		},
		instagram: {
			type: String,
		},
	},
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
