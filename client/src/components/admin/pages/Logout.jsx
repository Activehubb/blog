import React, { Fragment, useContext, useEffect } from "react";
import "./pages.css";
import { AuthContext } from "../../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { isDeleted } = useContext(AuthContext);

  const navigate = useNavigate();
  if (isDeleted) {
    return navigate("/");
  }
  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="bg-white p-4 shadow-md rounded-md h-2/5 w-3/5 flex flex-col justify-center items-center">
          <a
            href="/login-admin"
            className="flex justify-center items-center shadow-md mt-4 rounded-md p-4 bg-red-500 text-xl text-white"
          >
            You are logout
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Logout;
