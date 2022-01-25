import { TrashIcon } from '@heroicons/react/outline';
import React, { Fragment, useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { PostContext } from '../../../context/post/PostContext';
import { deletePostId } from '../../../context/post/postApiCalls';
import Footer from '../../user/layouts/footer/Footer';
import Header from '../../user/layouts/Header';
import './pages.css';


const DeletePost = () => {
	const {dispatch, isDeleted} = useContext(PostContext)
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const handleClick = () => {
		deletePostId(path, dispatch)
	};
	if (isDeleted) {
	return <Redirect to='/admin' />
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
						<TrashIcon className='h-6 text-white inline-block' /> Delete this
						post
					</button>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default DeletePost;
