// import axios from '../../helpers/axiosConfig';
import axios from "axios";
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
} from "./PostActions";

export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await axios.get("post/posts");

    dispatch(getPostsSuccess(res.data));
  } catch (error) {
    dispatch(getPostsFailure);
  }
};
export const getSinglePost = async (path, dispatch) => {
  dispatch(getSinglePostStart());
  try {
    const res = await axios.get(`/post/postId/${path}`);

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
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    };
    const res = await axios.post("/post/create", post, config);
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
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    };
    const res = await axios.put(`/post/update/${path}`, post, config);
    dispatch(updatePostSuccess(res.data));
  } catch (error) {
    dispatch(updatePostFailure());
  }
};

export const deletePostId = async (path, dispatch) => {
  try {
    const config = {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    };
    await axios.delete(`/post/delete/${path}`, config);
    dispatch(deletePostSuccess());
  } catch (error) {
    dispatch(deletePostFailure());
  }
};
