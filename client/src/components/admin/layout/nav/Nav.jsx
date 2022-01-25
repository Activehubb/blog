import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutlined, Logout } from '@mui/icons-material';
import { ViewBoardsIcon } from '@heroicons/react/solid';
import {
	BookOpenIcon,
	UserIcon,
	ChevronDownIcon,
} from '@heroicons/react/outline';
import './nav.css';
import { AuthContext } from '../../../../context/auth/AuthContext';
import { logoutUser } from '../../../../context/auth/apicall';

const Nav = () => {
	const { dispatch } = useContext(AuthContext);
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	const handleLogout = () => {
		logoutUser(dispatch);
	};
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
								<p>Ademola Artwork</p>
								<ChevronDownIcon className='h-5 text-gray-400 cursor-pointer' />
								{isOpen && (
									<div className='box absolute top-14 right-0 z-10 bg-gray-50  shadow rounded-md '>
										<div className='bg-gray-900 p-4 rounded-t-md flex justify-center items-center flex-col '>
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
										<ul className='list py-4 px-5 '>
											<li className='list-item  border-b border-dotted border-gray-200 py-2 '>
												<Link to='/admin'>Create Post</Link>
											</li>
											<li className='list-item  border-b border-dotted border-gray-200 py-2 '>
												<Link to='/'>Posts</Link>
											</li>
											<li className='list-item  border-b border-dotted border-gray-200 py-2 '>
												<Link to='/user'>Create Profile</Link>
											</li>
											<li className='list-item  border-b border-dotted border-gray-200 py-2 '>
												<Link to='/gallery'>Gallery</Link>
											</li>
											<li className='list-item  border-b border-dotted border-gray-200 py-2 '>
												<Link to='/comments'>Comments</Link>
											</li>
											<li
												className='list-item  border-b border-dotted border-gray-200 py-2 '
												onClick={handleLogout}
											>
												<Link to='/logout'>
													<Logout /> <span>Logout</span>
												</Link>
											</li>
											<li className='list-item  shadow-md rounded-md py-2 '>
												<Link
													to='/delaccount'
													className='flex items-center justify-center border-none text-gray-700'
												>
													<DeleteOutlined />
													<p className='text-sm '>Delete Account</p>
												</Link>
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
