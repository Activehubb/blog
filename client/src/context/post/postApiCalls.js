import axiosInstance from '../../helpers/axiosConfig';
import {
	createPostFailure,
	createPostStart,
	createPostSuccess,
	getPostsFailure,
	getPostsStart,
	getPostsSuccess,
	getSinglePostFailure,
	getSinglePostStart,
	getSinglePostSuccess,
	updatePostStart,
	updatePostSuccess,
	updatePostFailure,
	deletePostSuccess,
	deletePostFailure,
} from './PostActions';

export const getPosts = async (dispatch) => {
	dispatch(getPostsStart());
	try {
		const res = await axiosInstance.get('post/posts');

		dispatch(getPostsSuccess(res.data));
	} catch (error) {
		dispatch(getPostsFailure);
	}
};
export const getSinglePost = async (path, dispatch) => {
	dispatch(getSinglePostStart());
	try {
		const res = await axiosInstance.get(
			`post/postId/${path}`
		);

		dispatch(getSinglePostSuccess(res.data));
	} catch (error) {
		dispatch(getSinglePostFailure());
	}
};

export const createPost = async (post, dispatch) => {
	dispatch(createPostStart());
	try {
		const config = {
			headers: {
				token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
			},
		};
		const res = await axiosInstance.post(
			'post/create',
			post,
			config
		);
		dispatch(createPostSuccess(res.data));
	} catch (error) {
		dispatch(createPostFailure());
	}
};

export const updatePostId = async (path, post, dispatch) => {
	dispatch(updatePostStart());
	try {
		const config = {
			headers: {
				token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
			},
		};
		const res = await axiosInstance.put(
			`/post/update/${path}`,
			post,
			config
		);
		dispatch(updatePostSuccess(res.data));
	} catch (error) {
		dispatch(updatePostFailure());
	}
};

export const deletePostId = async (path, dispatch) => {
	try {
		const config = {
			headers: {
				token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
			},
		};
		await axiosInstance.delete(
			`/post/delete/${path}`,
			config
		);
		dispatch(deletePostSuccess());
	} catch (error) {
		dispatch(deletePostFailure());
	}
};
