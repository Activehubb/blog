const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
	// Get Tokens Header

	const token = req.header('x-auth-token');

	// Validate tokens
	if (!token) {
		return res.status(401).json({ msg: 'No token, unauthorized access' });
	}
	// Get token
	try {
		const decoded = jwt.verify(token, process.env.TOKEN);
		req.user = decoded.user;

		next();
	} catch (err) {
		res.status(401).json('Invalid Token');
	}
};
