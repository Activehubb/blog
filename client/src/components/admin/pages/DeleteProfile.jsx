import { TrashIcon } from '@heroicons/react/outline';
import React, { Fragment, useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { ProfileContext } from '../../../context/profile/ProfileContext';
import {deleteProfileId} from '../../../context/profile/profileApiCalls'
import Footer from '../../user/layouts/footer/Footer';
import Header from '../../user/layouts/Header';
import './pages.css';

const DeleteProfile = () => {
	const {isDeleted, dispatch} = useContext(ProfileContext)
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const handleClick = () => {
		deleteProfileId(path, dispatch)
	};
	if (isDeleted) {
		return <Redirect to='/about' />
	}
	return (
		<Fragment>
			<Header />
			<div className='flex justify-center items-center h-90 bg-gray-50'>
				<div className='bg-white p-4 shadow-md rounded-md h-2/5 w-3/5 flex flex-col justify-center items-center'>
					Are You Sure{' '}
					<button
						className='flex justify-center items-center shadow-md mt-4 rounded-md p-4 bg-red-500 text-xl text-white'
						onClick={handleClick}
					>
						<TrashIcon className='h-6 text-white inline-block' /> Delete Profile
					</button>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default DeleteProfile;
