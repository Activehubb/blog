import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { login } from "../../../../context/auth/apicall";
import { AuthContext } from "../../../../context/auth/AuthContext";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };
    login(data, dispatch);
  };

  const { user } = useContext(AuthContext);
  // Redirect to dashboard
  if (user) {
    return <Navigate to="/admin" />;
  }

  return (
    <>
      <main className="flex-1 lg:mt-20">
        <div className="flex max-w-lg mx-auto my-16 overflow-hidden bg-white rounded-lg lg:space-x-8 dark:bg-gray-900 lg:max-w-5xl">
          <div className="items-center hidden lg:flex lg:w-1/2">
            <img
              src=" https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?w=740&t=st=1659043891~exp=1659044491~hmac=3e893b0f8a201c76264dbd501e8f552588c6b2a90b118357b075aaace7a71357"
              alt="secure-login-animate.svg"
            />
          </div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
              Welcome Back
            </h2>
            <p className="mt-2 text-xl text-center text-gray-600 dark:text-gray-200">
              We are <span className="text-purple-900">Happy</span> to see you
              back
            </p>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>{" "}
              <h4 className="text-xs text-center text-gray-500 uppercase cursor-default  dark:text-gray-400 hover:underline">
                Login using your email
              </h4>{" "}
              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  E-Mail Address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  value={email}
                  required="required"
                  autocomplete="email"
                  className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  name="password"
                  required="required"
                  className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="col-md-6 offset-md-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="border-gray-200 rounded shadow-sm text-primary dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20"
                    />
                    <label
                      for="remember"
                      className="ml-2 text-gray-700 dark:text-gray-300"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <a
                  href="https://tailwindcomponents.com/password/reset"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Forgot Your Password?
                </a>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform rounded-md bg-red-400 hover:bg-red-500 focus:outline-none focus:bg-primary/70"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <a
                href="/register-admin"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                Create an account
              </a>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
