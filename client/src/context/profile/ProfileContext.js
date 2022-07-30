import ProfileReducer from './ProfileReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
	profile: null,
	isFetching: false,
	error: false,
	isCreated: false,
	isUpdated: false,
	isDeleted: false,
};

export const ProfileContext = createContext(INITIAL_STATE);

export const ProfileContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProfileReducer, INITIAL_STATE);

	return (
		<ProfileContext.Provider
			value={{
				profile: state.profile,
				isFetching: state.isFetching,
				error: state.error,
				isCreated: state.isCreated,
				isUpdated: state.isUpdated,
				isDeleted: state.isDeleted,
				dispatch,
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};
