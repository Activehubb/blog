export const profileStart = () => ({
	type: 'GET_PROFILE_START',
});

export const profileSuccess = (profile) => ({
	type: 'GET_PROFILE_SUCCESS',
	payload: profile,
});

export const profileFailure = () => ({
	type: 'GET_PROFILE_FAILURE',
});

export const createProfileStart = () => ({
	type: 'CREATE_PROFILE_START',
});

export const createProfileSuccess = (profile) => ({
	type: 'CREATE_PROFILE_SUCCESS',
	payload: profile,
});

export const createProfileFailure = () => ({
	type: 'CREATE_PROFILE_FAILURE',
});
export const updateProfileStart = () => ({
	type: 'UPDATE_PROFILE_START',
});

export const updateProfileSuccess = (profile) => ({
	type: 'UPDATE_PROFILE_SUCCESS',
	payload: profile,
});

export const updateProfileFailure = () => ({
	type: 'UPDATE_PROFILE_FAILURE',
});

export const deleteProfileSuccess = () => ({
	type: 'DELETE_PROFILE_SUCCESS',
});

export const deleteProfileFailure = () => ({
	type: 'DELETE_PROFILE_FAILURE',
});
