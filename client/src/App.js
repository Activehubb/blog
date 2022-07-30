import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SinglePost from "./components/user/singlePost/Post";
import About from "./components/admin/pages/About";
import Home from "./components/user/home/Home";
import {
  CreatePost,
  UpdatePost,
  UpdateProfile,
} from "./components/admin/home/AdminHome";
import DeletePost from "./components/admin/pages/DeletePost";
import Register from "./components/admin/auth/register/Register";
import Login from "./components/admin/auth/login/Login";
import Gallery from "./components/admin/pages/Gallery";
import Logout from "./components/admin/pages/Logout";
import DelUser from "./components/admin/pages/DelUser";
import DeleteProfile from "./components/admin/pages/DeleteProfile";
import CreateProfile from "./components/admin/dashboard/profile/CreateProfile";
import { useContext } from "react";
import { AuthContext } from "./context/auth/AuthContext";
import NotFound from "./components/NotFound";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Fragment>
      <Routes>
        {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<SinglePost />} />

        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* User */}

        {/* Admin */}
        <Route path="/register-admin" element={<Register />} />
        <Route path="/login-admin" element={<Login />} />
        {user && (
          <>
            <Route path="/admin" element={<CreatePost />} />

            <Route path="/user" element={<CreateProfile />} />

            <Route path="/updpost/:postId" element={<UpdatePost />} />

            <Route path="/updateprofile/:postId" element={<UpdateProfile />} />

            <Route path="/deletepost/:postId" element={<DeletePost />} />

            <Route path="/deleteprofile/:postId" element={<DeleteProfile />} />
            <Route path="/delaccount" element={<DelUser />} />
          </>
        )}

        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
        {/* Admin */}
      </Routes>
    </Fragment>
  );
}

export default App;
