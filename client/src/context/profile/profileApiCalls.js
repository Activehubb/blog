import axiosInstance from '../../helpers/axiosConfig';
import {
	createProfileFailure,
	createProfileStart,
	createProfileSuccess,
	profileFailure,
	profileStart,
	profileSuccess,
	updateProfileFailure,
	updateProfileStart,
	updateProfileSuccess,
	deleteProfileSuccess,
	deleteProfileFailure,
} from './ProfileAction';

export const getProfiles = async (dispatch) => {
	dispatch(profileStart());
	try {
		const res = await axiosInstance.get('profile');
		dispatch(profileSuccess(res.data));
	} catch (error) {
		dispatch(profileFailure());
	}
};

export const createProfile = async (profile, dispatch) => {
	dispatch(createProfileStart());
	try {
		const config = {
			headers: {
				'content-type': 'application/json',
				token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
			},
		};

		const res = await axiosInstance.post(
			'profile/create',
			profile,
			config
		);

		dispatch(createProfileSuccess(res.data));
	} catch (error) {
		dispatch(createProfileFailure());
	}
};

export const updateProfileId = async (path, profile, dispatch) => {
	dispatch(updateProfileStart());
	try {
		const config = {
			headers: {
				token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
			},
		};
		const res = await axiosInstance.put(
			`/profile/update/${path}`,
			profile,
			config
		);
		dispatch(updateProfileSuccess(res.data));
	} catch (error) {
		dispatch(updateProfileFailure());
	}
};
export const deleteProfileId = async (path, dispatch) => {
	try {
		const config = {
			headers: {
				token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
			},
		};
		await axiosInstance.delete(
			`/profile/delete/${path}`,
			config
		);
		dispatch(deleteProfileSuccess());
	} catch (error) {
		dispatch(deleteProfileFailure());
	}
};
