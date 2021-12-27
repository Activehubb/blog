import React, { Fragment } from 'react';
import Nav from '../layout/nav/Nav';
import './pages.css';
import CreatePost from '../dashboard/post/CreatePost';
import UpdatePost from '../dashboard/post/UpdatePost';
import UpdateProfile from '../dashboard/profile/UpdateProfile';

export const CrtPost = () => {
	return (
		<Fragment>
			<div className='flex-9'>
				<Nav />
				<CreatePost/>
			</div>
		</Fragment>
	);
};

export const UpdPost = () => {
	return (
		<Fragment>
			<div className='flex-9'>
				<Nav />
				<UpdatePost/>
			</div>
		</Fragment>
	);
};

export const UpdProfile = () => {
	return (
		<Fragment>
			<div className='flex-9'>
				<Nav />
				<UpdateProfile/>
			</div>
		</Fragment>
	);
};


