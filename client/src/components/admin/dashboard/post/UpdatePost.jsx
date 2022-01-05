import React, { Fragment, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { updatePost } from '../../../../constants/posts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import storage from '../../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';

const UpdatePost = ({ updatePost }) => {
	const [data, setData] = useState(null);

	const [media, setMedia] = useState(null);

	const handleChange = (e) =>
		setData({ ...data, [e.target.name]: e.target.value });

	const upload = (items) => {
		items.forEach((item) => {
			const spaceRef = ref(storage, `/postupdate/${item.file.name}`);

			const uploadTask = uploadBytesResumable(spaceRef, item.file);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log(`Upload is ${progress}% done...`);
				},
				(err) => console.log(err),
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((url) =>
						setData((data) => {
							return { ...data, [item.label]: url };
						})
					);
				}
			);
		});
	};

	const location = useLocation();
	const path = location.pathname.split('/')[2];

	const handleUpload = (e) => {
		e.preventDefault();

		upload([{ file: media, label: 'media' }]);

		updatePost(path, data);
	};
	console.log(data);
	return (
		<Fragment>
			<div className=' bg-gray-50 text-gray-800 h-full py-8'>
				<div className=' flex justify-center items-center h-screen'>
					<div className='p-4 w-1/2 bg-white shadow rounded'>
						<form onSubmit={(e) => handleUpload(e)}>
							{media && (
								<img src={URL.createObjectURL(media)} alt='' className='mt-3' />
							)}

							<div className='flex justify-center items-center text-gray-600 text-3xl font-extralight py-2 text-center'>
								<>Update Post</>
							</div>
							<div>
								<label htmlFor='title'>
									<h3 className='text-base py-2 font-semibold text-gray-400'>
										Post Title
									</h3>
								</label>
								<input
									name='title'
									id='title'
									placeholder='Enter a Title...'
									className='p-1 my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='desc'>
									<h3 className='text-base py-2 font-semibold text-gray-400'>
										Post Body
									</h3>
								</label>
								<textarea
									name='desc'
									onChange={(e) => handleChange(e)}
									id='desc'
									cols='10'
									className='w-full bg-gray-50 p-4 text-xl text-gray-700 font-vare focus:outline-none rounded-2xl shadow-md'
									autoFocus={true}
									placeholder='Please write Post details...'
								></textarea>
								<div className='box relative  border-dashed border my-4'>
									<label
										htmlFor='media'
										className='text-center flex flex-col justify-center items-center py-2'
									>
										<PlusCircleIcon className='h-10 text-gray-700 cursor-pointer' />
										<small className='text-center text-base text-gray-400'>
											{media ? media.name : <>Post Media (Images only)</>}
										</small>
									</label>
									<input
										type='file'
										name='media'
										id='media'
										hidden
										onChange={(e) => setMedia(e.target.files[0])}
									/>
								</div>
							</div>
							<div>
								<input
									type='submit'
									value='Update Post'
									className='inline-block w-full mt-4 py-2  mb-4 shadow-md text-base font-semibold outline-none border-none cursor-pointer bg-purple-900 text-white'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

UpdatePost.propTypes = {
	updatePost: PropTypes.func.isRequired,
};

export default connect(null, { updatePost })((UpdatePost));
