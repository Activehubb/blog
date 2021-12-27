import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfile } from '../../../../constants/profile';
import './sidebar.css';

const Sidebar = ({ getProfile, profileData }) => {
	useEffect(() => {
		getProfile();
	}, [getProfile]);
	return (
		<nav className='edit bg-gray-50 h-full sticky top-20 hidden lg:flex'>
			{profileData.length > 0 &&
				profileData.map((data) => (
					<div className=''>
						<div className='container mx-auto p-8'>
							<div className='title text-center text-base font-vare font-semibold text-gray-500 py-4 border-t border-b'>
								About Me
							</div>
							<img
								src={data.brandMedia}
								alt=''
								className='my-4 w-9/12 mx-auto shadow rounded-lg outline-none border-none'
							/>
							<p className='text text-center font-lora text-sm'>{data.desc}</p>
							<ul className='list grid grid-cols-2 gap-4 text-center my-8 border-t border-b text-gray-500 font-medium text-xl py-2 '>
								{data.skills.map((skill) => (
									<li className='list-item py-2 hover:text-gray-800'>
										<button>{skill}</button>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
		</nav>
	);
};

Sidebar.propTypes = {
	getProfile: PropTypes.func.isRequired,
	profileData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	profileData: state.profile.profiles,
});

export default connect(mapStateToProps, { getProfile })(Sidebar);
