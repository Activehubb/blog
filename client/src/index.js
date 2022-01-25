import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/auth/AuthContext';
import { PostContextProvider } from './context/post/PostContext';
import { ProfileContextProvider } from './context/profile/ProfileContext';

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<PostContextProvider>
				<ProfileContextProvider>
					<App />
				</ProfileContextProvider>
			</PostContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
