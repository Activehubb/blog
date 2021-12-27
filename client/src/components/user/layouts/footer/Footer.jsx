import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfile } from '../../../../constants/profile';
import { InboxInIcon } from '@heroicons/react/solid';
import './footer.css';
import React, { Fragment, useEffect } from 'react';

const Footer = ({ getProfile, profile: { profiles } }) => {
	useEffect(() => {
		getProfile();
	}, [getProfile]);
	return (
		<Fragment>
			{profiles &&
				profiles.map((profile) => (
					<footer key={profile._id}>
						{/* <div className='container mx-auto px-8 py-4 '> */}
							{/* <div className='border-t border-b pb-4'>
								<h3 className='font-medium text-2xl py-4 text-gray-600'>
									Sign Up For Our Newsletter
								</h3>
								<p className='py-2 text-gray-500'>
									Get events Updates, advice, and discover new art
								</p>
								<form className='py-2'>
									<div className='flex items-center space-x-4 px-4 py-2 border rounded-full'>
										<InboxInIcon className='h-8 text-gray-400 bg-gray-200 flex justify-center items-center rounded-full' />
										<input
											type='email'
											placeholder='Email Address'
											className='flex-grow border-none outline-none text-gray-500 bg-transparent'
										/>
									</div>
								</form>
							</div>
							<div className='main'></div> */}
						{/* </div> */}
							<div className=''>
								<div className='bg-gray-800 text-center font-vare text-base text-white p-4'>
									<p>
										&copy;{new Date().getFullYear()} copyright {profile.brand},
										Inc. All rights reserved.{' '}
									</p>
								</div>
							</div>
					</footer>
				))}
		</Fragment>
	);
};

Footer.propTypes = {
	getProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(Footer);
