const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
	try {
		await mongoose.connect(
			process.env.mongoDB,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false,
			},
			console.log(`mongoDB connected successfully`)
		);
	} catch (err) {
		console.error(`DB error`, err.message);
	}
};

module.exports = connectDB;
