const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const auth = require('../../middleware/auth')
dotenv.config();

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password')
		
		res.status(200).json(user)
	} catch (err) {
		res.status(500).json('Server Error')
	}
})

router.post('/', async (req, res) => {
	const { email, password } = req.body;
	try {
		let user = await User.findOne({ email });

		!user && res.status(404).json('Invalid Credentials');

		// Authenticate user password

		const validate = await bcrypt.compare(password, user.password);

		!validate && res.status(404).json('Invalid Credentials');

		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(
			payload,
			process.env.TOKEN,
			{ expiresIn: 3600000 },
			(err, token) => {
				if (err) throw err;
				res.status(200).json({ token });
			}
        );
        
        console.log(req.body, `${email} Log in`)
	} catch (err) {
		console.error(err.message);
	}
});



module.exports = router;
