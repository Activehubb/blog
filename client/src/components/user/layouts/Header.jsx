import React, { useEffect, useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfile } from '../../../constants/profile';

const Home = ({ getProfile, profile: { profiles } }) => {
	useEffect(() => {
		getProfile();
	}, [getProfile]);

	const [open, setOpen] = useState(false);

	const toggle = () => setOpen(!open);

	return (
		<header className='sticky top-0  z-50'>
			<div className='shadow-lg bg-white'>
				<div className='container mx-auto px-8 py-4 '>
					<div className='flex space-x-1 justify-between items-center'>
						<div className='right flex items-center'>
							<p className='text-2xl text-gray-500 font-lora font-bold'>
								{profiles &&
									profiles.map((profile) => (
										<Link to='/'>{profile.brand}</Link>
									))}
							</p>
						</div>
						<div className='left flex justify-between items-center'>
							<ul className='hidden md:flex md:flex-grow md: space-x-2 font-semibold font-vare text-gray-400 px-4'>
								<li>
									<Link to='/about' className='px-4'>
										About
									</Link>
								</li>
								<li>
									<Link to='/gallery' className='px-4'>
										Gallery
									</Link>
								</li>
							</ul>
							<div className='icons flex justify-between items-center'>
								<MenuIcon
									className='h-6 text-gray-500 p- cursor-pointer hover:text-blue-800 lg:hidden'
									onClick={() => toggle()}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{open && <Navbar />}
		</header>
	);
};
Home.propTypes = {
	getProfile: PropTypes.func.isRequired,
	profile: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(Home);
