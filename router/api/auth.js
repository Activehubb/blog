const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
dotenv.config();

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.find(req.user.id).select('-password');

		res.status(200).json(user);
	} catch (err) {
		res.status(500).json('Server Error');
	}
});

router.post('/signin', async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });

		if (!user) {
			return res.status(404).json('Invalid Credentials');
		}

		// Authenticate user password

		const validate = await bcrypt.compare(req.body.password, user.password);

		if (!validate) {
			return res.status(404).json('Invalid Credentials');
		}

		const payload = {
			id: user.id,
		};

		const accessToken = jwt.sign(payload, process.env.TOKEN, {
			expiresIn: 3600000,
		});

		const { password, ...rest } = user._doc;

		res.status(200).json({ ...rest, accessToken });
		console.log(`${req.body.email} Log in`);
	} catch (err) {
		console.error(err.message);
		res.status(500).json('server error');
	}
});

module.exports = router;
