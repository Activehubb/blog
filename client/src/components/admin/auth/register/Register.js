import React, { Fragment, useContext, useState } from 'react';
import { register } from '../../../../context/auth/apicall';
import { AuthContext } from '../../../../context/auth/AuthContext';
import { Redirect } from 'react-router-dom';
import Animate from '../../pages/Animate';

const Register = () => {
	const { isFetching, dispatch } = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();

		if (password !== password2) {
			console.log('Password do not match');
		} else {
			const user = { username, email, password };
			register(user, dispatch);
		}
	};

	const { user } = useContext(AuthContext);

	if (user) {
		return <Redirect to='/user' />;
	}

	return (
		<Fragment>
			{isFetching ? (
				<Animate type='loading' />
			) : (
				<>
					<div className=' bg-gray-50 text-gray-800'>
						<div className=' flex justify-center items-center h-screen'>
							<div className='p-4 w-1/2 bg-white shadow rounded'>
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
											onChange={(e) => {
												setUsername(e.target.value);
											}}
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
											onChange={(e) => {
												setEmail(e.target.value);
											}}
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
											onChange={(e) => {
												setPassword(e.target.value);
											}}
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
											onChange={(e) => {
												setPassword2(e.target.value);
											}}
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
				</>
			)}
		</Fragment>
	);
};

// Register.propTypes = {
// 	setAlert: PropTypes.func.isRequired,
// 	register: PropTypes.func.isRequired,
// 	auth: PropTypes.object.isRequired,
// };

export default Register;
