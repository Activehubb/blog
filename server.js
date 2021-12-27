const express = require('express');
const connectDB = require('./config/db');
const app = express();
const user = require('./router/user');
const auth = require('./router/auth');
const post = require('./router/post');
const profile = require('./router/profile');
const multer = require('multer');
const cors = require('cors');
const path = require('path');


app.use(express.json({ extended: false }));
app.use(cors());
app.use('/image', express.static(path.join(__dirname, '/image')));

// // multer

// // File storage
// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, 'image');
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, req.body.name);
// 	},
// });

// // File upload
// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('file'), (req, res) => {
// 	res.status(200).json(`File has been Uploaded`);
// });

// // multer

app.get('/', (req, res) => {
	res.send('Hello World')
})
app.use('/auth', auth);
app.use('/user', user);
app.use('/post', post);
app.use('/profile', profile);


const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
