import { CREATE_PROFILE, GET_PROFILE } from '../constants/types';

const initialState = {
	profile: null,
	profiles: [],
	loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	const { type, payload } = action;
	// eslint-disable-next-line default-case
	switch (type) {
		case CREATE_PROFILE:
			return {
				...state,
				profile: payload,
				loading: false,
			};
		case GET_PROFILE:
			return {
				...state,
				profiles: payload,
				loading: false
			}
		default:
			return state;
	}
}
