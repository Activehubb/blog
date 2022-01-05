const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Profile = require('../../models/Profile')
const Post = require('../../models/Post');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const auth = require('../../middleware/auth');
dotenv.config();

router.post('/', async (req, res) => {
	const { username, email, password } = req.body;
	try {
		// let user = await User.findOne({ email });

		let user = new User({
			username,
			email,
			password,
		});

		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		await user.save();

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
	} catch (err) {
		console.error(err.message);
		res.status(500).json('server error');
	}
});

router.put('/brand/:id', auth, async (req, res) => {
	const { brand, logo, picture } = req.body;
	const userBrand = { brand, logo, picture };

	try {
		const user = await User.findOneAndUpdate(
			req.params.id,
			{ $set: userBrand },
			{ new: true }
		);
		res.status(200).json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('server error');
	}
});

router.delete('/:id', auth, async(req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id)
		res.status(200).json('User account deleted...')
	} catch (err) {
		res.status(500).json(`Server ERR: ${err}`)
	}
})

router.delete('/', auth, async (req, res) => {
	try {
		await User.findOneAndRemove({id: req.id});
		await Profile.findOneAndRemove({user: req.user.id})
		await Post.deleteMany({ user: req.user.id});
		res.status(200).json('All User details deleted...')
	} catch (err) {
		res.status(500).json(`Server ERR: ${err}`)
	}
})

module.exports = router;
