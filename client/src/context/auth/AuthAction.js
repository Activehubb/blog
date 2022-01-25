export const registerStart = () => ({
    type: "REGISTER_START",
})
export const registerSuccess = (user) => ({
	type: "REGISTER_SUCCESS",
	payload: user,
});
export const registerFailure = () => ({
    type: "REGISTER_FAILURE",
})
export const loginStart = () => ({
    type: "LOGIN_START",
})
export const loginSuccess = (user) => ({
	type: "LOGIN_SUCCESS",
	payload: user,
});
export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
})
export const deleteAccountSuccess = () => ({
    type: "DELETE_ACCOUNT_SUCCESS",
})
export const deleteAccountFailure = () => ({
    type: "DELETE_ACCOUNT_FAILURE",
})
export const logout = () => ({
    type: "LOGOUT",
})