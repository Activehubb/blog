/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOAD_USER,
	AUTH_ERROR,
	LOGOUT,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from '../constants/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case LOAD_USER:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_FAIL:
		case LOGIN_FAIL:
		case AUTH_ERROR:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: null,
				loading: false,
			};
		default:
			return state;
	}
}
