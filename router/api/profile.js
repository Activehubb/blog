const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');
const User = require('../models/User');
const Post = require('../models/Post');

router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', [
			'username',
			'email',
		]);
		res.status(200).json(profiles);
	} catch (err) {
		res.status(401).send('Server error');
		console.error(err.message);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const profile = await Profile.findById(req.params.id).populate('user', [
			'username',
		]);
		res.status(200).json(profile);
	} catch (err) {
		res.status(401).send('Server error');
		console.error(err.message);
	}
});

router.post('/', auth, async (req, res) => {
	const {
		media,
		brand,
		brandMedia,
		desc,
		bio,
		youtube,
		facebook,
		twitter,
		linkedIn,
		skills,
		instagram,
	} = req.body;

	const profileFields = {};
	profileFields.user = req.user.id;
	if (media) profileFields.media = media;
	if (bio) profileFields.bio = bio;
	if (brand) profileFields.brand = brand;
	if (brandMedia) profileFields.brandMedia = brandMedia;
	if (desc) profileFields.desc = desc;
	if (skills)
		profileFields.skills = skills.split(',').map((skill) => skill.trim());

	profileFields.social = {};

	if (youtube) profileFields.social.youtube = youtube;
	if (facebook) profileFields.social.facebook = facebook;
	if (twitter) profileFields.social.twitter = twitter;
	if (linkedIn) profileFields.social.linkedIn = linkedIn;
	if (instagram) profileFields.social.instagram = instagram;

	try {
		const profile = new Profile(profileFields);

		await profile.save();

		res.status(200).json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(401).send('Internal server error');
	}
});

router.put('/:id', auth, async (req, res) => {
	const {
		media,
		brand,
		brandMedia,
		bio,
		desc,
		youtube,
		facebook,
		twitter,
		linkedIn,
		skills,
		instagram,
	} = req.body;

	const profileFields = {};
	profileFields.user = req.user.id;
	if (media) profileFields.media = media;
	if (bio) profileFields.bio = bio;
	if (brand) profileFields.brand = brand;
	if (desc) profileFields.desc = desc;
	if (brandMedia) profileFields.brandMedia = brandMedia;
	if (skills)
		profileFields.skills = skills.split(',').map((skill) => skill.trim());

	profileFields.social = {};

	if (youtube) profileFields.social.youtube = youtube;
	if (facebook) profileFields.social.facebook = facebook;
	if (twitter) profileFields.social.twitter = twitter;
	if (linkedIn) profileFields.social.linkedIn = linkedIn;
	if (instagram) profileFields.social.instagram = instagram;

	try {
		const profile = await Profile.findByIdAndUpdate(
			req.params.id,
			{ $set: profileFields },
			{ new: true }
		);
		res.status(200).json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(401).send('Internal server error');
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		await Profile.findByIdAndDelete(req.params.id);
		res.status(200).json(`Account deleted successfully`);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
