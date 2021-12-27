import React, { Fragment } from 'react';
import CreateProfile from '../dashboard/profile/CreateProfile';
import Nav from '../layout/nav/Nav';

const SetUser = () => {
	return (
		<Fragment>
			<div className='flex-9'>
				<Nav />
				<CreateProfile />
			</div>
		</Fragment>
	);
};

export default SetUser;
