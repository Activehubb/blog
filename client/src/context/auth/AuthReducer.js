const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_START':
		case 'REGISTER_START':
			return {
				user: null,
				isFetching: true,
				error: false,
				isDeleted: false,
			};
		case 'LOGIN_SUCCESS':
		case 'REGISTER_SUCCESS':
			return {
				user: action.payload,
				isFetching: false,
				error: false,
				isDeleted: false,
			};
		case 'LOGIN_FAILURE':
		case 'REGISTER_FAILURE':
		case 'DELETE_ACCOUNT_FAILURE':
			return {
				user: null,
				isFetching: false,
				error: true,
				isDeleted: false,
			};
		case 'LOGOUT':
		case 'DELETE_ACCOUNT_SUCCESS':
			return {
				user: null,
				isFetching: false,
				error: false,
				isDeleted: true,
			};
		default:
			return { ...state };
	}
};

export default AuthReducer;
