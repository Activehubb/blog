import Posts from '../posts/Posts';
import Header from '../layouts/Header';
import Footer from '../layouts/footer/Footer';
import React, { Fragment, useContext, useEffect } from 'react';
import { PostContext } from '../../../context/post/PostContext';
import Animate from '../../admin/pages/Animate';
import { getPosts } from '../../../context/post/postApiCalls';

const Home = () => {
	const { isFetching, posts, dispatch } = useContext(PostContext);
	useEffect(() => {
		getPosts(dispatch);
	}, [dispatch]);

	console.log(posts);
	return (
		<Fragment>
			{isFetching ? (
				<Animate type='loading' />
			) : (
				<>
					<Header />

					<Posts postData={posts} key={posts.map((post) => post._id)} />

					<Footer />
				</>
			)}
		</Fragment>
	);
};

// Home.propType = {
// 	post: PropTypes.object.isRequired,
// 	getPost: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
// 	post: state.posts,
// });

export default Home;
