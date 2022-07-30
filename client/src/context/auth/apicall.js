import axios from "axios";
import axiosInstance from "../../helpers/axiosConfig";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  deleteAccountSuccess,
  deleteAccountFailure,
  logout,
} from "./AuthAction";

export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/user/signup", user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure(error.response));
  }
};

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/signin", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure(error.response));
  }
};

export const deleteAccount = async (dispatch) => {
  try {
    const config = {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    };
    await axios.delete("auth/delete", config);
    dispatch(deleteAccountSuccess());
  } catch (error) {
    dispatch(deleteAccountFailure(error.response));
  }
};

export const logoutUser = (dispatch) => {
  dispatch(logout());
};
