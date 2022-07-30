import { PlusCircleIcon, LinkIcon } from '@heroicons/react/solid';
import { UserCircleIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

import storage from '../../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';

import { Navigate, useLocation } from 'react-router-dom';
import { updateProfileId } from '../../../../context/profile/profileApiCalls';
import { useContext } from 'react';
import { ProfileContext } from '../../../../context/profile/ProfileContext';

const UpdateProfile = () => {
	const [data, setData] = useState(null);
	const [transfer, setTransfer] = useState(0);

	const [media, setMedia] = useState(null);
	const [brandMedia, setBrandMedia] = useState(null);

	const handleChange = (e) =>
		setData({ ...data, [e.target.name]: e.target.value });

	const upload = (items) => {
		items.forEach((item) => {
			const fileName = new Date().getTime + item.label + item.file.name;

			const storageRef = ref(storage, `/profileupdate/${fileName}`);
			const uploadTask = uploadBytesResumable(storageRef, item.file);
			console.log(item.file.name, item.file);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log(`Upload is ${progress}% done.`);
				},
				(err) => {
					console.log(err);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((url) => {
						setData((data) => {
							return { ...data, [item.label]: url };
						});
						setTransfer((data) => data + 1);
					});
				}
			);
		});
	};

	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const { isUpdated, dispatch } = useContext(ProfileContext);

	const handleTransfer = (e) => {
		e.preventDefault();

		upload([
			{ file: media, label: 'media' },
			{ file: brandMedia, label: 'brandMedia' },
		]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		updateProfileId(path, data, dispatch);
	};

	if (isUpdated) {
		return <Navigate to='/about' />;
	}
	console.log(data);

	return (
		<Fragment>
			<div className=' bg-gray-50 text-gray-800'>
				<div className=' p-8'>
					<div className='p-4  bg-white shadow rounded'>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className='lg:flex lg:justify-center lg:space-x-8'>
								<div className='lg:w-1/2'>
									{media && <img src={URL.createObjectURL(media)} alt='' />}
									<div className='flex items-center justify-center text-gray-600 text-3xl font-extralight py-2 text-center'>
										<UserCircleIcon className='h-10' />
										<>User Profile</>
									</div>
									<div>
										<label htmlFor='bio'>
											<h3 className='text-base py-2 font-semibold text-gray-400'>
												Bio
											</h3>
										</label>
										<textarea
											name='bio'
											id='bio'
											cols='10'
											className='w-full  p-4 text-xl text-gray-700 font-vare focus:outline-none rounded-2xl shadow-md'
											autoFocus={true}
											placeholder='Enter your Email'
											onChange={(e) => handleChange(e)}
										></textarea>
										<div className='py-2'>
											<label htmlFor='desc'>
												<h3 className='text-base py-2 font-semibold text-gray-400'>
													Desc
												</h3>
											</label>
											<textarea
												name='desc'
												id='desc'
												cols='10'
												className='w-full  p-4 text-xl text-gray-700 font-vare focus:outline-none rounded-2xl shadow-md'
												autoFocus={true}
												placeholder='Enter your Email'
												onChange={(e) => handleChange(e)}
											></textarea>
											<small className='font-medium  text-gray-500'>
												Can be a summary of your bio write a short desc for your
												page
											</small>
										</div>
										<div className='py-2'>
											<label
												htmlFor='status'
												className='text-base py-2 font-semibold text-gray-400'
											>
												Status
											</label>
											<input
												name='status'
												id='status'
												placeholder='e.g Artists, Developer, Designer'
												onChange={(e) => handleChange(e)}
												className='p-1 my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
											/>
										</div>
										<div className='py-2'>
											<label
												htmlFor='skills'
												className='text-base py-2 font-semibold text-gray-400'
											>
												Skills set/Categories
											</label>
											<input
												name='skills'
												id='skills'
												placeholder='e.g Arts, Science, Commercial'
												onChange={(e) => handleChange(e)}
												className='p-1 my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
											/>
											<small className='font-medium  text-gray-400'>
												For proper format, separate skills out with comma
											</small>
										</div>
										<div className='box relative  border-dashed border my-4'>
											<label
												htmlFor='media'
												className='text-center flex flex-col justify-center items-center py-2'
											>
												<PlusCircleIcon className='h-10 text-gray-700 cursor-pointer' />
												<small className='text-center text-base text-gray-400'>
													{media ? (
														media.name
													) : (
														<>Profile Media (Images only)</>
													)}
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
								</div>

								<div className='lg:w-1/2'>
									{brandMedia && (
										<img src={URL.createObjectURL(brandMedia)} alt='' />
									)}
									<div className='flex items-center justify-center text-gray-600 text-3xl font-extralight py-2 text-center'>
										<LinkIcon className='h-10' />
										<>Page Profile</>
									</div>
									<div>
										<label htmlFor='brand'>
											<h3 className='text-base py-2 font-semibold text-gray-400'>
												Brand Title
											</h3>
										</label>
										<input
											name='brand'
											id='brand'
											placeholder='Brand Title'
											className='p-1 my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
											onChange={(e) => handleChange(e)}
										/>
										<label htmlFor='username'>
											<h3 className='text-base py-2 font-semibold text-gray-400'>
												Post Creator Name
											</h3>
										</label>
										<input
											name='username'
											id='username'
											placeholder='Enter a name to desc post creator'
											className='p-1 my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
											onChange={(e) => handleChange(e)}
										/>
										<label htmlFor='email'>
											<h3 className='text-base py-2 font-semibold text-gray-400'>
												Email
											</h3>
										</label>
										<input
											name='email'
											id='email'
											placeholder='Enter a name to desc post creator'
											className='p-1 my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
											onChange={(e) => handleChange(e)}
										/>
										<div>
											<h3 className='text-base text-center py-2 font-semibold text-gray-400'>
												Social Info
											</h3>
											<label htmlFor='facebook'>Facebook</label>
											<input
												name='facebook'
												id='facebook'
												placeholder='Facebook Link'
												onChange={(e) => handleChange(e)}
												className='p-1 my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
											/>
											<label htmlFor='instagram'>Instagram</label>
											<input
												name='instagram'
												id='instagram'
												placeholder='Instagram Handle'
												onChange={(e) => handleChange(e)}
												className='p-1 my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
											/>
											<label htmlFor='twitter'>Twitter</label>
											<input
												name='twitter'
												id='twitter'
												placeholder='Twitter Link'
												onChange={(e) => handleChange(e)}
												className='p-1  my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
											/>
											<label htmlFor='youtube'>Youtube</label>
											<input
												name='youtube'
												id='youtube'
												placeholder='Youtube Link'
												onChange={(e) => handleChange(e)}
												className='p-1  my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b'
											/>
										</div>
										<div className='box relative  border-dashed border my-4'>
											<label
												htmlFor='brandMedia'
												className='text-center flex flex-col justify-center items-center py-2'
											>
												<PlusCircleIcon className='h-10 text-gray-700 cursor-pointer' />
												<small className='text-center text-base text-gray-400'>
													{brandMedia ? (
														<p className='text-lg text-blue-900'>
															{brandMedia.name}
														</p>
													) : (
														<>Add profile logo (Images only)</>
													)}
												</small>
											</label>
											<input
												type='file'
												name='brandMedia'
												id='brandMedia'
												hidden
												onChange={(e) => setBrandMedia(e.target.files[0])}
											/>
										</div>
									</div>
								</div>
							</div>
							{transfer === 2 ? (
								<div>
									<input
										type='submit'
										value='Update Profile'
										className='inline-block text-white w-full mt-4 py-2  mb-4 shadow-md text-base font-semibold outline-none border-none cursor-pointer bg-blue-900 round-md'
									/>
								</div>
							) : (
								<div>
									<input
										type='button'
										value='Upload Profile'
										className='inline-block text-white w-full mt-4 py-2  mb-4 shadow-md text-base font-semibold outline-none border-none cursor-pointer bg-blue-900 round-md'
										onClick={handleTransfer}
									/>
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default UpdateProfile;
