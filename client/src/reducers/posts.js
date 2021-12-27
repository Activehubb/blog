import { CREATE_POST, GET_POST, GET_POSTS } from '../constants/types';

const initialState = {
	post: null,
	posts: [],
	loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	const { type, payload } = action;
	// eslint-disable-next-line default-case
	switch (type) {
		case GET_POSTS:
			return {
				...state,
				posts: payload,
				loading: false,
			};
		case CREATE_POST:
		case GET_POST:
			return {
				...state,
				post: payload,
				loading: false,
			};
		default:
			return state;
	}
}
