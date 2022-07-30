import React, { useState, useContext } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Logout } from "@mui/icons-material";
import { logoutUser } from "../../../context/auth/apicall";
import { AuthContext } from "../../../context/auth/AuthContext";
import { ProfileContext } from "../../../context/profile/ProfileContext";
const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  const { profile } = useContext(ProfileContext);

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const handleLogout = () => {
    logoutUser(dispatch);
  };

  return (
    <>
      {profile &&
        profile.map((prof) => (
          <header className="sticky top-0  z-50">
            <div className="shadow-lg bg-white">
              <div className="container mx-auto px-8 py-4 ">
                <div className="flex space-x-1 justify-between items-center">
                  <div className="right flex items-center">
                    <p className="text-2xl text-gray-500 font-lora font-bold">
                      <Link to="/">{prof.brand}</Link>
                    </p>
                  </div>
                  <div className="left flex justify-between items-center">
                    <ul className="hidden lg:flex lg:justify-center lg:items-center space-x-2 font-semibold font-vare text-gray-400 px-4">
                      <li>
                        <Link to="/about" className="px-4">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery" className="px-4">
                          Gallery
                        </Link>
                      </li>
                      {user && (
                        <li className="list-item bg-red-500 shadow-md rounded-md p-2">
                          <a
                            href="/logout"
                            className="flex items-center justify-center border-none text-white"
                            onClick={() => handleLogout()}
                          >
                            <Logout /> <span>Logout</span>
                          </a>
                        </li>
                      )}
                    </ul>
                    <div className="icons flex justify-between items-center">
                      <MenuIcon
                        className="h-6 text-gray-500 p- cursor-pointer hover:text-blue-800 lg:hidden"
                        onClick={() => toggle()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {open && <Navbar />}
          </header>
        ))}
    </>
  );
};

export default Header;
