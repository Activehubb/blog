import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../user/layouts/Header';
import { connect } from 'react-redux';
import { getProfile } from '../../../constants/profile';
import PropTypes from 'prop-types';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Animate from './Animate';

const About = ({
	getProfile,
	profile: { profiles, loading },
	auth: { isAuthenticated },
}) => {
	useEffect(() => {
		getProfile();
	}, [getProfile]);
	return (
		<Fragment>
			{loading ? (
				<Animate type='loading' />
			) : (
				<>
					<Header />
					{profiles &&
						profiles.map((profile) => (
							<div className=' bg-gray-100 p-8' key={profile._id}>
								<div className='container mx-auto'>
									<div className=' p-4 shadow-md  bg-white rounded-md'>
										<div className='w-8/12 mx-auto '>
											<small className='font-jose text-gray-400 block text-center lg:inline lg:text-left'>
												{profile.status}
											</small>
											<div className='flex justify-around items-center pb-4 mt-4'>
												<img
													src={profile.media}
													alt=''
													className='rounded-full lg:h-24 lg:w-24 h-12 w-12 shadow-md flex justify-center items-center'
												/>
												<div className='box2'>
													<p className='text-lg text-gray-500 font-bold font-vare'>
														{profile.user.username}
													</p>
													<p className='font-jose text-gray-400'>
														{profile.user.email}
													</p>
												</div>
											</div>
											<hr />
											<div className='bio font-lora text-gray-500 p-2 text-justify'>
												{profile.bio}
											</div>
											<hr />

											<div className='font-jose mb-4 text-gray-400'>
												<h3 className='p-2'>Skills</h3>
												<div className='flex justify-between lg: flex-wrap'>
													{profile.skills.map((skill) => (
														<ul className='list flex space-x-4'>
															<li className='lg:m-0 m-2 p-2 bg-gray-900 shadow space-x-2 rounded-md text-white font-vare flex'>
																{skill}
															</li>
														</ul>
													))}
												</div>
											</div>
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
											{isAuthenticated !== null ? (
												<div>
													<div className='flex justify-between'>
														<div>
															<Link to={`/updateprofile/${profile._id}`}>
																Update Profile
															</Link>
														</div>
														<div>
															<Link
																to={`/deleteprofile/${profile._id}`}
																className='right'
															>
																<button className='inline-block shadow-md rounded-md p-4'>
																	Delete profile
																</button>
															</Link>
														</div>
													</div>
												</div>
											) : (
												<></>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
				</>
			)}
		</Fragment>
	);
};

About.propTypes = {
	getProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth,
});

export default connect(mapStateToProps, { getProfile })(About);
