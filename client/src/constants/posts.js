// import { axios } from '../config';
import { setAlert } from './alert';
import {
	CREATE_POST,
	ERR_POST,
	GET_POST,
	GET_POSTS,
	UPDATE_POST,
	DEL_POST,
} from './types';
// import { axiosInstance } from '../config';
import axios from 'axios';

export const getPost = () => async (dispatch) => {
	try {
		const res = await axios.get('/post');

		dispatch({
			type: GET_POSTS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({ type: ERR_POST });
	}
};

export const getPostById = (path) => async (dispatch) => {
	try {
		const res = await axios.get(`/post/${path}`);

		dispatch({
			type: GET_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: ERR_POST,
		});
	}
};

export const createPost = (newPost) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const res = await axios.post('/post', newPost, config);

		dispatch(setAlert('Post Created successfully', 'green'), {
			type: CREATE_POST,
		});
		dispatch({
			type: CREATE_POST,
			payload: res.data,
		});
	} catch (error) {
		dispatch(setAlert('Server error check your connection', 'red'));
	}
};

export const updatePost = (path, updpost) => async (dispatch) => {
	try {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};
		const res = await axios.put(`/post/${path}`, updpost, config);

		dispatch(setAlert('Post updated successfully', 'blue'), {
			type: UPDATE_POST,
		});
		dispatch({
			type: UPDATE_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: ERR_POST,
		});
	}
};

export const delPost = (path) => async (dispatch) => {
	try {
		const res = await axios.delete(`/post/${path}`);

		dispatch(setAlert('Post Deleted successfully', 'green'), {
			type: DEL_POST,
		});
		dispatch({
			type: DEL_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch(setAlert('Opps something went wrong', 'red'));
		dispatch({
			type: ERR_POST,
		});
	}
};
