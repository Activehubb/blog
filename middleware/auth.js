const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
	// Get Tokens Header

	const authHeader = req.headers.token;

	// Validate tokens
	if (authHeader) {
		const token = authHeader.split(' ')[1];

		jwt.verify(token, process.env.TOKEN, (err, user) => {
			if (err) {
				return res.status(403).json('Token is not Valid');
			}

			req.user = user;

			next();
		});
	} else {
		return res.status(401).json('You are not authorized');
	}
};
