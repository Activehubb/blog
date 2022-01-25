const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');

router.get('/posts', async (req, res) => {
	try {
		const posts = await Post.find().sort({ createdAt: -1 });
		res.status(200).json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send(`Server error`);
	}
});

router.get('/postId/:id', async (req, res) => {
	try {
		const posts = await Post.findById(req.params.id);
		res.status(200).json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send(`Server error`);
	}
});

router.post('/create', auth, async (req, res) => {
	const { title, desc, media, category } = req.body;

	const post = {};

	post.user = req.user.id;

	if (title) post.title = title;
	if (desc) post.desc = desc;
	if (media) post.media = media;
	if (category) post.category = category;

	try {
		const user = new Post(post);

		await user.save();

		res.status(200).json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.put('/update/:id', auth, async (req, res) => {
	const { title, desc, media, category } = req.body;

	const post = {};

	post.user = req.user.id;

	if (title) post.title = title;
	if (desc) post.desc = desc;
	if (media) post.media = media;
	if (category) post.category = category;

	try {
		let updPost = await Post.findById(req.params.id);

		if (!updPost) {
			return res.status(404).json({ msg: 'No Post Found' });
		} else {
			updPost = await Post.findOneAndUpdate(
				req.params.id,
				{ $set: post },
				{ new: true }
			);
			return res.status(200).json(updPost);
		}
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Post not Found' });
		}
		res.status(500).send('Server error');
	}
});

router.delete('/delete/:id', auth, async (req, res) => {
	try {
		await Post.findByIdAndDelete(req.params.id);
		res.status(200).json('Post deleted successfully...');
	} catch (err) {
		res.status(500).json(`Server ERR: ${err}`);
	}
});
module.exports = router;
