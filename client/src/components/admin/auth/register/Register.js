import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../../../constants/alert';
import PropTypes from 'prop-types';
import { register } from '../../../../constants/auth';
import Alert from '../../layout/Alert';
import { Redirect } from 'react-router-dom';

const Register = ({ setAlert, register, auth: { isAuthenticated } }) => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	});

	const { username, email, password, password2 } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value }); 
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		if (password !== password2) {
			setAlert('Password do not match', 'red');
		} else {
			// eslint-disable-next-line no-restricted-globals
			register({ username, email, password })
			
			setAlert(`${username} account is created successfully`, 'green');
		}
	};

	if (isAuthenticated) {
		return <Redirect to='/user' />
	}

	return (
		<Fragment>
			<div className=' bg-gray-50 text-gray-800'>
				<div className=' flex justify-center items-center h-screen'>
					<div className='p-4 w-1/2 bg-white shadow rounded'>
						<Alert />
						<form onSubmit={(e) => onSubmit(e)}>
							<div className='text-gray-600 text-5xl font-extralight py-2 text-center'>
								<>Register</>
							</div>
							<div>
								<label htmlFor='username'>
									<h3 className='text-base py-2 font-semibold text-gray-400'>
										Username
									</h3>
								</label>
								<input
									onChange={(e) => onChange(e)}
									value={username}
									type='text'
									name='username'
									id='username'
									placeholder='e.g Nicky'
									className='p-1 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
									autoFocus={true}
									required
								/>
							</div>
							<div>
								<label htmlFor='email'>
									<h3 className='text-base py-2 font-semibold text-gray-400'>
										Email
									</h3>
								</label>
								<input
									onChange={(e) => onChange(e)}
									value={email}
									type='text'
									name='email'
									id='email'
									placeholder='e.g jdoe@gmail.com'
									className='p-1 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
									required
								/>
							</div>
							<div>
								<label htmlFor='password'>
									<h3 className='text-base py-2 font-semibold text-gray-400'>
										Password
									</h3>
								</label>
								<input
									onChange={(e) => onChange(e)}
									value={password}
									type='password'
									name='password'
									id='password'
									placeholder='Password'
									className='p-1 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
								/>
							</div>
							<div>
								<label htmlFor='password'>
									<h3 className='text-base py-2 font-semibold text-gray-400'>
										{' '}
										Confirm Password
									</h3>
								</label>
								<input
									onChange={(e) => onChange(e)}
									value={password2}
									type='password'
									name='password2'
									id='password'
									placeholder='Confirm Password'
									className='p-1 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
								/>
							</div>
							<div>
								<input
									type='submit'
									value='Register'
									className='inline-block w-full mt-4 py-2  mb-4 shadow-lg text-base font-semibold outline-none border-none cursor-pointer bg-gray-900 text-white rounded'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps, { setAlert, register })(Register);
