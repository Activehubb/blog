import React, { Fragment, useState } from 'react';
import { login } from '../../../../constants/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Alert from '../../layout/Alert';

const Login = ({ login, auth }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		rememberMe: false,
	});

	const { email, password, rememberMe } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};

	// Redirect to dashboard
	if (auth) {
		return <Redirect to='/admin' />;
	}

	return (
		<Fragment>
			<div className=' bg-gray-50 text-gray-800'>
				<div className='flex justify-center items-center h-screen'>
					<div className='p-4 w-1/2 bg-white shadow rounded'>
						<form onSubmit={(e) => onSubmit(e)}>
							<Alert />
							<div className='text-gray-600 text-5xl font-extralight py-2 text-center'>
								<h2>Login</h2>
							</div>
							<div className='form_group'>
								<label htmlFor='email'>
									<h3 className='text-base py-2 font-semibold text-gray-400'>
										Email
									</h3>
								</label>
								<input
									onChange={(e) => onChange(e)}
									value={email}
									type='email'
									name='email'
									id='email'
									placeholder='e.g jdoe@gmail.com'
									className='p-1 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
									required
								/>
							</div>
							<div className='form_group'>
								<label htmlFor='password'>
									<h3 className='text-base py-2 font-semibold text-gray-400'>
										password
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
									required
								/>
							</div>
							<>
								<div className='form_group-wrap  justify-between py-4 hidden xl:flex'>
									<div>
										<input
											onChange={(e) => onChange(e)}
											value={rememberMe}
											type='checkbox'
											name='rememberMe'
											id='rememberMe'
										/>{' '}
										Remember Me
									</div>
									<div className='pr-2'>
										<button>
											<p>Forgot password?</p>
										</button>
									</div>
								</div>
							</>
							<div className='form_group'>
								<input
									type='submit'
									value='Login'
									className='inline-block w-full mt-4 py-2  mb-4 shadow-lg text-base font-semibold outline-none border-none cursor-pointer bg-gray-900 text-white rounded-md'
								/>
							</div>
						</form>
						<p className='text-center '>
							Don't have account?
							<Link
								to='/register-admin'
								className='cursor-pointer text-red-900 font-medium italic'
							>
								Sign Up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	auth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
