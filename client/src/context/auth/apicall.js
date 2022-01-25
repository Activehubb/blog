import axiosInstance from '../../helpers/axiosConfig';
import {
	loginFailure,
	loginStart,
	loginSuccess,
	registerFailure,
	registerStart,
	registerSuccess,
	deleteAccountSuccess,
	deleteAccountFailure,
	logout,
} from './AuthAction';

export const register = async (user, dispatch) => {
	dispatch(registerStart());
	try {
		const res = await axiosInstance.post('user/signup', user);
		dispatch(registerSuccess(res.data));
	} catch (error) {
		dispatch(registerFailure());
	}
};

export const login = async (user, dispatch) => {
	dispatch(loginStart());
	try {
		const res = await axiosInstance.post('auth/signin', user);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const deleteAccount = async (dispatch) => {
	try {
		const config = {
			headers: {
				token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
			},
		};
		await axiosInstance.delete('auth/delete', config);
		dispatch(deleteAccountSuccess());
	} catch (error) {
		dispatch(deleteAccountFailure());
	}
};

export const logoutUser = (dispatch) => {
	dispatch(logout());
};
