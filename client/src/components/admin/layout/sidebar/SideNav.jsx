import React, { useState } from 'react';
import {
	BookOpenIcon,
	ChevronDownIcon,
	PencilAltIcon,
	PhotographIcon,
	UserCircleIcon,
} from '@heroicons/react/solid';
import './sidebar.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
	const [openList, setOpenList] = useState(false);
	const [openProfile, setOpenProfile] = useState(false);
	const onToggle = (e) => setOpenList(!openList);
	const onToggleProfile = (e) => setOpenProfile(!openProfile);

	return (
		<div className='flex-3 hidden lg:block'>
			<div className='relative'>
				<div className='topheader'>
					<div className='dashboardTitle py-3 bg-gray-900  text-white text-center font-medium text-2xl w-full'>
						<Link to='/admin'>Amako ArtWork</Link>
					</div>
				</div>
				<div className='mid mt-10'>
					<div className='pageLogo text-center my-8'>
						<img src='' alt='You Have not upload Logo yet ' />
					</div>
					<ul className='list text-justify text-xl text-gray-600 relative'>
						<li className='flex justify-between  border-dotted shadow p-4 items-center'>
							<div className='box flex  items-center'>
								<UserCircleIcon className='h-8 w-8 mr-4' />
								<span className=' text-gray-500'>Profile</span>
							</div>

							<ChevronDownIcon
								onClick={(e) => onToggleProfile(e)}
								className=' text-base h-6 w-6 cursor-pointer'
							/>
						</li>
						{openProfile && (
							<ul className='list ml-4 text-sm font- text-gray-500'>
								<li className='list-item border-dotted border-b p-4'>
									<Link to='/user'>Create Profile</Link>
								</li>
								<li className='list-item p-4'>
									<Link to='/page'>Update Profile</Link>
								</li>
							</ul>
						)}
						<li className='flex justify-between  border-dotted shadow p-4 items-center'>
							<div className='box flex  items-center'>
								<PencilAltIcon className='h-8 w-8 mr-4' />
								<span className=' text-gray-500'>Post</span>
							</div>
							<ChevronDownIcon
								onClick={(e) => onToggle(e)}
								className='text-base h-6 w-6 cursor-pointer'
							/>
						</li>
						{openList && (
							<ul className='list ml-4 text-sm font- text-gray-500 '>
								<li className='list-item border-dotted border-b p-4'>
									<Link to='/admin'>Create Post</Link>
								</li>
								<li className='list-item p-4'>
									<Link to='/'>Posts</Link>
								</li>
							</ul>
						)}
						<li className='flex justify-between  border-dotted shadow p-4 items-center'>
							<div className='box flex  items-center'>
								<PhotographIcon className='h-8 w-8 mr-4' />
								<span className=' text-gray-500'>
									<Link to='/gallery'>Gallery</Link>
								</span>
							</div>
						</li>
						<li className='flex justify-between  border-dotted shadow p-4 items-center'>
							<div className='box flex  items-center'>
								<BookOpenIcon className='h-8 w-8 mr-4' />
								<span className=' text-gray-500'>
									{' '}
									<Link to='/comments'>Comments</Link>
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
