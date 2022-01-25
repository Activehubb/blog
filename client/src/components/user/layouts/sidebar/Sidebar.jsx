import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../../../context/auth/AuthContext';
import './sidebar.css';

const Sidebar = () => {
	const { user } = useContext(AuthContext)
	if (user === null) {
		return <Redirect to='/' />;
	}
	return (
		<nav className='edit bg-gray-50 h-full sticky top-20 hidden lg:flex'>
					<div className=''>
						<div className='container mx-auto p-8'>
							<div className='title text-center text-base font-vare font-semibold text-gray-500 py-4 border-t border-b'>
								About Me
							</div>
							<img
						src=''
								alt=''
								className='my-4 w-9/12 mx-auto shadow rounded-lg outline-none border-none'
							/>
							<p className='text text-center font-lora text-sm'></p>
							<ul className='list grid grid-cols-2 gap-4 text-center my-8 border-t border-b text-gray-500 font-medium text-xl py-2 '>
									<li className='list-item py-2 hover:text-gray-800'>
										<button></button>
									</li>

							</ul>
						</div>
					</div>

		</nav>
	);
};


export default Sidebar;
