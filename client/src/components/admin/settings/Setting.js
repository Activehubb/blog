import React, { Fragment } from 'react'
import SideNav from '../layout/sidebar/SideNav';
import SetUser from './UserSetting';

export const UserSetting = () => {
	return (
		<Fragment>
			<div className='flex'>
				<SideNav />
				<SetUser />
			</div>
		</Fragment>
	);
};



