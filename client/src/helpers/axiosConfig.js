import Axios from 'axios';

const axiosInstance = Axios.create({
	baseURL: 'http://localhost:4000/api/',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
});

export default axiosInstance;
