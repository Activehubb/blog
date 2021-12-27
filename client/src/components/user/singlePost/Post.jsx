import React, { Fragment, useEffect } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/footer/Footer';
import './post.css';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPostById } from '../../../../src/constants/posts';

const SinglePost = ({
	getPostById,
	posts: { post },
	auth: { isAuthenticated },
}) => {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	useEffect(() => {
		getPostById(path);
	}, [getPostById, path]);

	return (
		<Fragment>
			<Header />
			{post && (
				<main className='pst' key={post._id}>
					<div className='container mx-auto m-4 p-8'>
						<div className=' flex justify-center items-center flex-col shadow-lg rounded-lg '>
							<div className='rounded-md'>
								<img
									src={post.media}
									alt=''
									objectfit='contain'
									className=' imgrep rounded-lg'
								/>
							</div>
							<div className=' p-4'>
								<h2 className='title p-2'>
									<button
										href=''
										className='font-vare text-gray-600 hover:text-gray-800'
									>
										{post.title}
									</button>
								</h2>
								<div className='body'>
									<div className='p-2 text-gray-500'>
										<span className=''>
											<button>{`by ${post.username}`}</button>
										</span>
										<span>
											<button className='px-2 font-lora'>
												| {new Date(post.createdAt).toDateString()} |
											</button>
										</span>
										<span className='creator'>
											<button>{post.username}</button>
										</span>
									</div>
									<div className='font-lora text-gray-600 font-medium p-2'>
										{post.desc}
									</div>
								</div>
							</div>
						</div>
						<form className='py-4 border-t'>
							<fieldset>
								<legend className='py-4 font-medium text-lg text-gray-800'>
									Comment on this Post:
								</legend>
								<textarea
									name='comment'
									id='msg'
									cols='10'
									className='w-full bg-gray-50 p-4 text-xl text-gray-700 font-vare focus:outline-none rounded-2xl shadow-md'
								></textarea>
								<input
									type='button'
									value='Comment'
									className='inline-block py-4 px-12 text-base text-white bg-green-500 rounded-md my-4 shadow'
								/>
							</fieldset>
						</form>
						{isAuthenticated !== null ? (
							<div className='flex flex-wrap, justify-between'>
								<div className='left'>
									<Link to={`/updpost/${post._id}`}>Update Post</Link>
								</div>
								<Link to={`/deletepost/${post._id}`} className='right'>
									<button className='inline-block shadow-md rounded-md p-4'>
										Delete post
									</button>
								</Link>
							</div>
						) : (
							<></>
						)}
					</div>
				</main>
			)}

			<Footer />
		</Fragment>
	);
};

SinglePost.propTypes = {
	getPostById: PropTypes.func.isRequired,
	posts: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	posts: state.posts,
	auth: state.auth
});

// eslint-disable-next-line no-undef
export default connect(mapStateToProps, { getPostById })(SinglePost);
