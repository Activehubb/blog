import React from 'react';
import Sidebar from '../../layouts/sidebar/Sidebar';
import Post from '../../singlePost/Post';
import './single.css'

const SinglePost = () => {
	return (
		<div className='pts'>
			<Post />
			<Sidebar />
		</div>
	);
};

export default SinglePost;
