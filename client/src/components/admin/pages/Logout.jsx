import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../../../constants/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './pages.css';
import Alert from '../layout/Alert';

const Logout = ({ logout, auth: { token, isAuthenticated } }) => {
	const handleClick = () => {
		logout();
	};

	if (token === null && isAuthenticated === null) {
		return <Redirect to='/login-admin' />;
	}

	return (
		<Fragment>
			<div className='flex justify-center items-center h-screen bg-gray-50'>
				<div className='bg-white p-4 shadow-md rounded-md h-2/5 w-3/5 flex flex-col justify-center items-center'>
					<Alert />
					<button
						className='flex justify-center items-center shadow-md mt-4 rounded-md p-4 bg-red-500 text-xl text-white'
						onClick={handleClick()}
					>
						You are logout
					</button>
				</div>
			</div>
		</Fragment>
	);
};

Logout.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Logout);
