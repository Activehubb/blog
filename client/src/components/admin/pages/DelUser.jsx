import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../../context/auth/AuthContext'
import { deleteAccount } from '../../../context/auth/apicall';
import Footer from '../../user/layouts/footer/Footer';
import './pages.css';
import { useContext } from 'react';

const DeleteUser = () => {
	const {dispatch, isDeleted} = useContext(AuthContext)
	const handleClick = () => {
		deleteAccount(dispatch);
	};

	if (isDeleted) {
		return <Redirect to='/register-admin' />;
	}

	return (
		<Fragment>
			<div className='flex justify-center items-center h-screen bg-gray-50'>
				<div className='bg-white p-4 shadow-md rounded-md h-2/5 w-3/5 flex flex-col justify-center items-center'>
					<button
						className='flex justify-center items-center shadow-md mt-4 rounded-md p-4 bg-red-500 text-xl text-white '
						onClick={handleClick}
					>
						Account Deleted
					</button>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default DeleteUser;
