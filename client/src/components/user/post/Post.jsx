import React from 'react';
import { Link } from 'react-router-dom';
import './post.css'
import '../../admin/pages/animate.css'

const Card = ({ post }) => {
	return (
		<main>
			<div className='container mx-auto m-4 p-8' key={post._id}>
				<div className=' flex justify-center items-center flex-col shadow-lg rounded-lg '>
					<div className='h- {150px}'>
						<img
							src={post.media}
							alt=''
							objectfit='cover'
							className='lg:w-full lg:h-1/5 h-1/2 postImg'
						/>
					</div>
					<div className=' p-4'>
						<h2 className='title p-2'>
							<button
								href=''
								className='font-vare font-medium text-lg text-gray-600 hover:text-gray-800'
							>
								{post.title}
							</button>
						</h2>
						<div className='body'>
							<div className='p-2 text-gray-500'>
								<span className=''>
									<Link
										to={`/post/${post.user.username}`}
									>{`by ${post.user.username}`}</Link>
								</span>
								<span>
									<button className='px-2 font-lora'>
										| {new Date(post.createdAt).toDateString()} |
									</button>
								</span>
								<span className='creator'>
									<button>{`${post.user.username}`}</button>
								</span>
							</div>
							<div className='font-lora text-gray-600 font-medium p-2 postDesc'>
								{post.desc}
							</div>
							<Link
								to={`/post/${post._id}`}
								className='p-2 mt-2 inline-block border-solid border text-sm outline-none text-gray-600 font-light ml-2 rounded '
							>
								READ MORE
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Card;
