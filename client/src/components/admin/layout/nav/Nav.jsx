import {  ViewBoardsIcon } from '@heroicons/react/solid';
import {
	BookOpenIcon,
	UserIcon,
	ChevronDownIcon,
} from '@heroicons/react/outline';
import React, { useState } from 'react';
// import DP from '../../../../bgjuly.jfif';
import './nav.css';
import { Link } from 'react-router-dom';
import Agency from '../../../../activehub.png'

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className='sticky top-0 z-50'>
			<div className=' bg-white shadow'>
				<div className='container mx-auto p-2 px-4'>
					<div className='flex justify-between items-center '>
						<div className='right flex items-center text-gray-700'>
							<ViewBoardsIcon className='h-8 w-8' />
							<span className='text-2xl font-medium text-gray-600'>
								<Link to='/admin'>Dashboard</Link>
							</span>
						</div>
						<div className='left'>
							<div
								className='box flex items-center space-x-4 border-sm border-solid rounded-full shadow p-2 text-gray-600  relative'
								onClick={() => toggle()}
							>
								<p>Activehub</p>
								<ChevronDownIcon className='h-5 text-gray-400 cursor-pointer' />
								{isOpen && (
									<div className='box absolute top-14 right-0 z-10 bg-gray-50  shadow rounded-md'>
										<div className='bg-gray-900 p-4 rounded-t-md flex justify-center items-center flex-col'>
											<img
												src={Agency}
												alt=''
												className='h-20 w-20 object-cover rounded-full justify-center items-center'
											/>
											<hr />
											<ul className='list flex py-2'>
												<li className='list-item'>
													<UserIcon className='h-6 text-gray-500 px-4' />
												</li>
												<li className='list-item'>
													<BookOpenIcon className='h-6 text-gray-500 px-4' />
												</li>
											</ul>
										</div>
										<ul className='list'>
											<li className='list-item  border-b border-dotted border-gray-200 p-2'>
												Post
											</li>
											<li className='list-item  border-b border-dotted border-gray-200 p-2'>
												Create Post
											</li>
											<li className='list-item  border-b border-dotted border-gray-200 p-2'>
												Page Desc
											</li>
											<li className='list-item  border-b border-dotted border-gray-200 p-2'>
												Exhibition
											</li>
											<li className='list-item  border-b border-dotted border-gray-200 p-2'>
												Gallery
											</li>
											<li className='list-item  border-b border-dotted border-gray-200 p-2'>
												Comments
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
