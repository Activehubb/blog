import './footer.css';
import React, { Fragment, useContext, useEffect } from 'react';
import { ProfileContext } from '../../../../context/profile/ProfileContext';
import { getProfiles } from '../../../../context/profile/profileApiCalls';

const Footer = () => {
	const { profile, dispatch } = useContext(ProfileContext);
	useEffect(() => {
		getProfiles(dispatch);
	}, [dispatch]);
	return (
		<Fragment>
			{profile &&
				profile.map((prof) => (
					<footer key={prof._id}>
						<div className='bg-gray-800 text-center font-vare text-base text-white p-4'>
							<p>
								&copy;{new Date().getFullYear()} {prof.brand} copyright, Inc.
								All rights reserved.{' '}
							</p>
						</div>
					</footer>
				))}
		</Fragment>
	);
};

export default Footer;
