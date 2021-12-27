import React from 'react';
import SideNav from '../layout/sidebar/SideNav';
import {CrtPost, UpdPost, UpdProfile} from '../pages/Pages';

export const CreatePost = () => {
	return (
		<div className='flex'>
			<SideNav />
			<CrtPost />
		</div>
	);
};

export const UpdatePost = () => {
	return (
		<div className='flex'>
			<SideNav />
			<UpdPost />
		</div>
	);
};

export const UpdateProfile = () => {
	return (
		<div className='flex'>
			<SideNav />
			<UpdProfile />
		</div>
	);
};


