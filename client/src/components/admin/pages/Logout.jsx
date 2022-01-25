import React, { Fragment, useContext } from 'react';
import './pages.css';
import { AuthContext } from '../../../context/auth/AuthContext';
import { Redirect } from 'react-router-dom';

const Logout = () => {
	const { isDeleted } = useContext(AuthContext);

	if (isDeleted) {
		return <Redirect to='/' />;
	}
	return (
		<Fragment>
			<div className='flex justify-center items-center h-screen bg-gray-50'>
				<div className='bg-white p-4 shadow-md rounded-md h-2/5 w-3/5 flex flex-col justify-center items-center'>
					<button className='flex justify-center items-center shadow-md mt-4 rounded-md p-4 bg-red-500 text-xl text-white'>
						You are logout
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Logout;
