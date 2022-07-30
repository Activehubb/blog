import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/auth/AuthContext";
import { PostContextProvider } from "./context/post/PostContext";
import { ProfileContextProvider } from "./context/profile/ProfileContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <PostContextProvider>
          <ProfileContextProvider>
            <App />
          </ProfileContextProvider>
        </PostContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
