const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
		title: {
			type: String,
		},
		desc: {
			type: String,
		},
		category: {
			type: String,
		},
		media: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = Post = mongoose.model('post', PostSchema);
