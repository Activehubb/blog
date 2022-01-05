const express = require('express');
const connectDB = require('./config/db');
const app = express();
const user = require('./router/api/user');
const auth = require('./router/api/auth');
const post = require('./router/api/post');
const profile = require('./router/api/profile');
const cors = require('cors');


app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World')
})
app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/post', post);
app.use('/api/profile', profile);


const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
