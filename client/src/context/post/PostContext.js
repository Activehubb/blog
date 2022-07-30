import PostReducer from './PostReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
	posts: null,
	post: null,
	isFetching: false,
	error: false,
	isCreated: false,
	isUpdated: false,
	isDeleted: false,
};

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

	return (
		<PostContext.Provider
			value={{
				posts: state.posts,
				post: state.post,
				isFetching: state.isFetching,
				error: state.error,
				isUpdated: state.isUpdated,
				isDeleted: state.isDeleted,
				dispatch,
			}}
		>
			{children}
		</PostContext.Provider>
	);
};
