import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../../../context/profile/ProfileContext';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => {
	const { profile } = useContext(ProfileContext);
	return (
		<Fragment>
			{profile &&
				profile.map((prof) => (
					<div
						className='container bg-transparent mx-auto lg:hidden'
						key={prof._id}
					>
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
									{prof.desc}
								</small>
								<div className='flex justify-around items-center pb-4'>
									<img
										src={prof.brandMedia}
										alt=''
										className='rounded-full h-14 shadow-md w-14'
									/>
									<div className='box2'>
										<p className='text-lg text-gray-500 font-bold font-vare'>
											{prof.username}
										</p>
										<p className='font-jose text-gray-400'>{prof.email}</p>
									</div>
								</div>
								<div className='bio font-lora text-gray-500 p-2 text-justify'>
									{prof.bio}
								</div>

								<hr />
								{profile.social && (
									<div className='social flex p-4 justify-center'>
										<ul className='list flex space-x-4'>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<a
													href={profile.social.facebook}
													target='_blank'
													rel='noreferrer'
												>
													<FacebookIcon />
												</a>
											</li>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<a
													href={profile.social.youtube}
													target='_blank'
													rel='noreferrer'
												>
													<YouTubeIcon />
												</a>
											</li>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<a
													href={profile.social.linkedIn}
													target='_blank'
													rel='noreferrer'
												>
													<LinkedInIcon />
												</a>
											</li>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<a
													href={profile.social.instagram}
													target='_blank'
													rel='noreferrer'
												>
													<InstagramIcon />
												</a>{' '}
											</li>
											<li className='list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare'>
												<a
													href={profile.social.twitter}
													target='_blank'
													rel='noreferrer'
												>
													<TwitterIcon />
												</a>
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

// Navbar.propTypes = {
// 	getProfile: PropTypes.func.isRequired,
// 	profile: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
// 	profile: state.profile,
// });

export default Navbar;
