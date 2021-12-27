import React, { Fragment, useEffect } from 'react';
import Header from '../../user/layouts/Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../../constants/posts';
import Animate from './Animate';
import './animate.css'

const Gallery = ({ getPost, post: { loading, posts } }) => {
	useEffect(() => {
		getPost();
		console.log(getPost());
	}, [getPost]);
	return (
		<Fragment>
			{loading ? (
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

Gallery.propTypes = {
	getPost: PropTypes.func.isRequired,
	media: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		post: state.posts,
	};
}

export default connect(mapStateToProps, { getPost })(Gallery);
