// import { axiosInstance } from '../config';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	AUTH_ERROR,
	LOAD_USER,
	LOGOUT,
	DEL_USER,
} from './types';
import { setAlert } from './alert';
import setAuth from '../utils/setAuth';
// import { axiosInstance } from '../config';
import axios from 'axios';

export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuth(localStorage.token);
	}

	try {
		const res = await axios.get('/auth');

		dispatch({
			type: LOAD_USER,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

export const register =
	({ username, email, password }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({
			username,
			email,
			password,
		});

		try {
			const res = await axios.post('/user', body, config);

			dispatch(setAlert(`Account created successfully`, 'green'), {
				type: REGISTER_SUCCESS,
			});
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});

			dispatch(loadUser());
		} catch (err) {
			dispatch(setAlert(`Server error check your connection`, 'red'));
			dispatch(
				{ type: REGISTER_FAIL },
				setAlert(`Server error check your connection`, 'red')
			);
		}
	};

export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({
		email,
		password,
	});

	try {
		const res = await axios.post('/auth', body, config);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});

		dispatch(loadUser());
	} catch (err) {
		dispatch(setAlert(`Server error check your connection`, 'red'));
		dispatch({
			type: LOGIN_FAIL,
		});
		console.log(err);
	}
};

export const logout = () => (dispatch) => {
	dispatch(setAlert('You are currently logout', 'green'));
	dispatch({ type: LOGOUT });
};

export const DelUser = () => async (dispatch) => {
	try {
		await axios.delete('/user');

		dispatch(setAlert('Account Deleted successfully', 'green'));
		dispatch({ type: LOGOUT });
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};
