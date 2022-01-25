import React, { Fragment, useEffect } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/footer/Footer';
import './post.css';
import { Link, useLocation } from 'react-router-dom';
import Animate from '../../admin/pages/Animate';
import { getSinglePost } from '../../../context/post/postApiCalls';
import { useContext } from 'react';
import { PostContext } from '../../../context/post/PostContext';
import { AuthContext } from '../../../context/auth/AuthContext';

const SinglePost = () => {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const { post, isFetching, dispatch } = useContext(PostContext);
	const { user } = useContext(AuthContext);
	useEffect(() => {
		getSinglePost(path, dispatch);
	}, [path, dispatch]);
	console.log(post);
	return (
		<Fragment>
			{isFetching ? (
				<Animate type='loading' />
			) : (
				<>
					<Header />
					{post && (
						<main key={post._id}>
							<div className='container mx-auto m-4 p-8'>
								<div className=' flex justify-center items-center flex-col shadow-lg rounded-lg '>
									<div className='rounded-md'>
										<img
											src={post.media}
											alt='post media'
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
													<button>{post.category}</button>
												</span>
											</div>
											<div className='font-lora text-gray-600 font-medium p-2'>
												{post.desc}
											</div>
										</div>
									</div>
								</div>
								{user !== null ? (
									<div className='flex flex-wrap, justify-evenly item-center py-4'>
										<div className='left'>
											<Link to={`/updpost/${post._id}`}>
												<button className='bg-green-700 text-white font-500 inline-block shadow-md rounded-md p-4'>
													Update post
												</button>
											</Link>
										</div>
										<Link to={`/deletepost/${post._id}`} className='right'>
											<button className='bg-red-700 text-white font-500 inline-block shadow-md rounded-md p-4'>
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
				</>
			)}
		</Fragment>
	);
};

export default SinglePost;
