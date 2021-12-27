import { TrashIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { delPost } from '../../../constants/posts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../../user/layouts/footer/Footer';
import Header from '../../user/layouts/Header';
import './pages.css';
import { setAlert } from '../../../constants/alert';
import Alert from '../layout/Alert';

const DeletePost = ({ delPost }) => {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const handleClick = () => {
		if (path) {
			delPost(path);
		} else {
			setAlert('Opps an error occured post not deleted', 'red');
		}
	};
    setTimeout(() => {
			if (handleClick) return <Redirect to='/' />;
		}, 5000);
	return (
		<Fragment>
			<Header />
			<div className='flex justify-center items-center h-90 bg-gray-50'>
				<div className='bg-white p-4 shadow-md rounded-md h-2/5 w-3/5 flex flex-col justify-center items-center'>
					<Alert />
					Are You Sure{' '}
					<button
						className='flex justify-center items-center shadow-md mt-4 rounded-md p-4 bg-red-500 text-xl text-white'
						onClick={handleClick()}
					>
						<TrashIcon className='h-6 text-white inline-block' /> Delete this
						post
					</button>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

DeletePost.propTypes = {
	delPost: PropTypes.func.isRequired,
};

export default connect(null, { delPost })(DeletePost);
