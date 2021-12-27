import Posts from '../posts/Posts';
import Header from '../layouts/Header';
import Footer from '../layouts/footer/Footer';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost } from '../../../constants/posts';
import Animate from '../../admin/pages/Animate';

const Home = ({ getPost, post: { posts, loading } }) => {
	useEffect(() => {
		getPost();
	}, [getPost]);
	return (
		<Fragment>
			{loading ? (
				<Animate type='loading' />
			) : (
				<>
					<Header />
					<div>
						<Posts posts={posts} loading={loading} />
					</div>
					<Footer />
				</>
			)}
		</Fragment>
	);
};

Home.propType = {
	post: PropTypes.object.isRequired,
	getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.posts,
});

export default connect(mapStateToProps, { getPost })(Home);
