const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Profile = require("../../models/Profile");
const Post = require("../../models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const auth = require("../../middleware/auth");
dotenv.config();

router.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);

    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
    });

    await user.save();

    const payload = {
      id: user.id,
    };
    const accessToken = jwt.sign(payload, process.env.TOKEN, {
      expiresIn: 3600000,
    });

    const { password, ...rest } = user._doc;

    res.status(200).json({ ...rest, accessToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("server error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User account deleted...");
  } catch (err) {
    res.status(500).json(`Server ERR: ${err}`);
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    await User.findOneAndRemove({ id: req.id });
    await Profile.findOneAndRemove({ user: req.user.id });
    await Post.deleteMany({ user: req.user.id });
    res.status(200).json("All User details deleted...");
  } catch (err) {
    res.status(500).json(`Server ERR: ${err}`);
  }
});

module.exports = router;
