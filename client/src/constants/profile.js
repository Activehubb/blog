import axios from 'axios';
import { setAlert } from './alert';
import {
	CREATE_PROFILE,
	DEL_PROFILE,
	ERR_PROFILE,
	GET_PROFILE,
	UPDATE_PROFILE,
} from './types';

export const createProfile = (newProfile) => async (dispatch) => {
	try {
		const res = await axios.post('/profile', newProfile);

		dispatch(setAlert('Profile created successfully', 'green'), {
			type: CREATE_PROFILE,
		});
		dispatch({
			type: CREATE_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		console.error(err);
		dispatch(setAlert('Profile not created', 'red'), { type: ERR_PROFILE });
	}
};

export const updateProfile = (path, newProfile) => async (dispatch) => {
	try {
		const res = await axios.put(`/profile/${path}`, newProfile);

		dispatch(setAlert('Profile updated successfully', 'green'), {
			type: UPDATE_PROFILE,
		});
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch(setAlert('Profile not created', 'red'), { type: ERR_PROFILE });
		console.error(err);
	}
};
export const getProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('/profile');

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		console.error(err);
	}
};
export const delProfile = (path) => async (dispatch) => {
	try {
		const res = await axios.delete(`/profile/${path}`);

		dispatch(setAlert('Profile Deleted successfully', 'green'));
		dispatch({
			type: DEL_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch(setAlert('Profile not deleted an error occured', 'red'), {
			type: ERR_PROFILE
		});
	}
};
