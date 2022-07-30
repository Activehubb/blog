import React, { Fragment, useContext, useState } from "react";
import { register } from "../../../../context/auth/apicall";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { Navigate, Redirect } from "react-router-dom";

const Register = () => {
  const { dispatch, user } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { firstName, lastName, email, password };
    register(user, dispatch);
  };

  if (user) {
    return <Navigate to="/user" />;
  }

  return (
    <>
      <Fragment>
        {/* {isFetching ? (
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
			)} */}

        {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div> */}
      </Fragment>
      <>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
            <div
              className=" text-gray-500 rounded-3xl shadow-sm w-full overflow-hidden"
              style={{ maxWidth: "1000px" }}
            >
              <div className="md:flex w-full">
                <div className="items-center hidden lg:flex lg:w-1/2">
                  <img
                    src=" https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1659043188~exp=1659043788~hmac=0181c9c4e37227141dae9a5a88f8c758f631664ef92f371e14fd14b83e32ebe7"
                    alt="secure-login-animate.svg"
                    // className=" rou"
                  />
                </div>
                {/* <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10"></div> */}
                <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">
                      REGISTER
                    </h1>
                    <p>Enter your information to register</p>
                  </div>
                  <div>
                    <div className="flex -mx-3">
                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor="firstName"
                          className="text-xs font-semibold px-1"
                        >
                          First name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="John"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor="lastName"
                          className="text-xs font-semibold px-1"
                        >
                          Last name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            name="lastName"
                            type="text"
                            id="lastName"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Smith"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold px-1"
                        >
                          Email
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            name="email"
                            id="email"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="johnsmith@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor="password"
                          className="text-xs font-semibold px-1"
                        >
                          Password
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            name="password"
                            id="password"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="************"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor="password"
                          className="text-xs font-semibold px-1"
                        >
                          Confirm Password
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            type="password"
                            name="password"
                            id="password"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="************"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <input
                          value={"REGISTER NOW"}
                          type="submit"
                          // onSubmit={handleSubmit}
                          className="block w-full max-w-xs mx-auto po bg-yellow-400 cursor-pointer hover:bg-yellow-500 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    <a
                      href="/login-admin"
                      className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                    >
                      Already have account Login Here
                    </a>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    </>
  );
};

// Register.propTypes = {
// 	setAlert: PropTypes.func.isRequired,
// 	register: PropTypes.func.isRequired,
// 	auth: PropTypes.object.isRequired,
// };

export default Register;
