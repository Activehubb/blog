const ProfileReducer = (state, action) => {
	switch (action.type) {
		case 'GET_PROFILE_START':
		case 'CREATE_PROFILE_START':
		case 'UPDATE_PROFILE_START':
			return {
				profile: [],
				isFetching: true,
				error: false,
				isCreated: false,
				isUpdated: false,
				isDeleted: false,
			};
		case 'GET_PROFILE_SUCCESS':
		case 'CREATE_PROFILE_SUCCESS':
			return {
				profile: action.payload,
				isFetching: false,
				error: false,
				isCreated: true,
				isUpdated: false,
				isDeleted: false,
			};
		case 'UPDATE_PROFILE_SUCCESS':
			return {
				profile: action.payload,
				isFetching: false,
				error: false,
				isCreated: false,
				isUpdated: true,
				isDeleted: false,
			};
		case 'DELETE_PROFILE_SUCCESS':
			return {
				profile: [],
				isFetching: false,
				error: false,
				isCreated: false,
				isUpdated: false,
				isDeleted: true,
			};
		case 'GET_PROFILE_FAILURE':
		case 'CREATE_PROFILE_FAILURE':
		case 'UPDATE_PROFILE_FAILURE':
		case 'DELETE_PROFILE_FAILURE':
			return {
				profile: [],
				isFetching: false,
				error: true,
				isCreated: false,
				isUpdated: false,
				isDeleted: false,
			};
		default:
			return { ...state };
	}
};

export default ProfileReducer;
