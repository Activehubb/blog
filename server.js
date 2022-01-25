const express = require('express');
const connectDB = require('./config/db');
const app = express();
const user = require('./router/api/user');
const auth = require('./router/api/auth');
const post = require('./router/api/post');
const profile = require('./router/api/profile');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 4000;
const inProduction = process.env.NODE_ENV === 'production';

app.use(express.json());
app.use(
	cors({
		origin: inProduction ? 'http://localhost:4000' : 'http://localhost:3000',
	})
);

connectDB();

app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/post', post);
app.use('/api/profile', profile);

if (inProduction) {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
