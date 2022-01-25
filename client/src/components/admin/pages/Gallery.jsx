import React, { Fragment, useContext } from 'react';
import Header from '../../user/layouts/Header';
import Animate from './Animate';
import './animate.css'
import {PostContext} from '../../../context/post/PostContext'

const Gallery = () => {
	const {posts, isFetching} = useContext(PostContext)
	return (
		<Fragment>
			{isFetching ? (
				<Animate type='loading' />
			) : (
				<div className='bg-gray-100'>
					<Header />
					{posts &&
						posts.map((post) => (
							<div className='p-2  '>
								<img
									src={post.media}
									alt=''
									className=' object-center rounded-md shadow-2xl border-white border-4 lg:flex lg:items-center lg:justify-between lg:p-2 '
								/>
							</div>
						))}
				</div>
			)}
		</Fragment>
	);
};

export default Gallery;
