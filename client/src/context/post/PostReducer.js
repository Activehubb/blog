const PostReducer = (state, action) => {
	switch (action.type) {
		case 'GET_POSTS_START':
		case 'GET_SINGLEPOST_START':
		case 'CREATE_POST_START':
		case 'UPDATE_POST_START':
			return {
				posts: [],
				post: [],
				isFetching: true,
				error: false,
				isUpdated: false,
				isDeleted: false,
			};
		case 'GET_POSTS_SUCCESS':
			return {
				posts: action.payload,
				isFetching: false,
				error: false,
			};
		case 'GET_SINGLEPOST_SUCCESS':
		case 'CREATE_POST_SUCCESS':
			return {
				post: action.payload,
				isFetching: false,
				error: false,
				isCreated: true,
				isUpdated: false,
				isDeleted: false,
			};
		case 'UPDATE_POST_SUCCESS':
			return {
				post: action.payload,
				isFetching: false,
				error: false,
				isCreated: false,
				isUpdated: true,
				isDeleted: false,
			};
		case 'DELETE_POST_SUCCESS':
			return {
				post: [],
				isFetching: false,
				error: false,
				isCreated: false,
				isUpdated: false,
				isDeleted: true,
			};
		case 'CREATE_POST_FAILURE':
		case 'UPDATE_POST_FAILURE':
		case 'GET_POSTS_FAILURE':
		case 'GET_SINGLEPOST_FAILURE':
		case 'DELETE_POST_FAILURE':
			return {
				posts: [],
				post: [],
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

export default PostReducer;
