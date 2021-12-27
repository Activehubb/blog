import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfile } from '../../../constants/profile';
import PropTypes from 'prop-types';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = ({ getProfile, profile: { profiles } }) => {
	useEffect(() => {
		getProfile();
	}, [getProfile]);
	return (
		<Fragment>
			{profiles &&
				profiles.map((profile) => (
					<div className='container bg-transparent mx-auto lg:hidden'>
						<div className=' p-4 bg-transparent  rounded-md'>
							<ul className=' bg-white list my-4 flex justify-between items-center p-4 shadow-md rounded-md font-medium text-gray-600 font-lora '>
								<li className='list-item '>
									<Link to='/about'>About</Link>
								</li>
								<li className='list-item'>
									<Link to='/gallery'>Gallery</Link>
								</li>
							</ul>
							<div className='shadow-md bg-white my-4 rounded-md'>
								<small className='font-jose text-gray-400 text-center block p-4'>
									Developer
								</small>
								<div className='flex justify-around items-center pb-4'>
									<img
										src={profile.media}
										alt=''
										className='rounded-full h-12 shadow-md w-12'
									/>
									<div className='box2'>
										<p className='text-lg text-gray-500 font-bold font-vare'>
											{profile.brand}
										</p>
										<p className='font-jose text-gray-400'>
											{profile.user.email}
										</p>
									</div>
								</div>
								<div className='bio font-lora text-gray-500 p-2 text-justify'></div>

								<hr />

								{profile.social && (
									<div className='social flex p-4 justify-center'>
										<ul className='list flex space-x-4'>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<Link to={`${profile.social.facebook}`}>
													<FacebookIcon />
												</Link>
											</li>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<Link to={profile.social.youtube}>
													<YouTubeIcon />
												</Link>
											</li>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<Link to={profile.social.linkedIn}>
													<LinkedInIcon />
												</Link>
											</li>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<Link to={profile.social.instagram}>
													<InstagramIcon />
												</Link>{' '}
											</li>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<Link to={profile.social.twitter}>
													<TwitterIcon />
												</Link>
											</li>
										</ul>
									</div>
								)}

								
							</div>
						</div>
					</div>
				))}
		</Fragment>
	);
};

Navbar.propTypes = {
	getProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(Navbar);
