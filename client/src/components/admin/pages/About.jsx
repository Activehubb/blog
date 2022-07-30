import React, { useEffect, useContext } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../user/layouts/Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Animate from "./Animate";
import { ProfileContext } from "../../../context/profile/ProfileContext";
import { getProfiles } from "../../../context/profile/profileApiCalls";
import { AuthContext } from "../../../context/auth/AuthContext";

const About = () => {
  const { profile, isFetching, dispatch } = useContext(ProfileContext);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    getProfiles(dispatch);
  }, [dispatch]);
  console.log(profile);

  if (profile === null) {
    return <Animate type="loading" />;
  }
  return (
    <Fragment>
      <>
        <Header />
        {profile &&
          profile.map((profile) => (
            <div className=" bg-gray-100 p-8" key={profile._id}>
              <div className="container mx-auto">
                <div className=" p-4 shadow-md  bg-white rounded-md">
                  <div className="w-8/12 mx-auto ">
                    <small className="font-jose text-gray-400 block text-center lg:inline lg:text-left">
                      {profile.status}
                    </small>
                    <div className="flex justify-around items-center pb-4 mt-4">
                      <img
                        src={profile.media}
                        alt=""
                        className="rounded-full lg:h-24 lg:w-24 h-12 w-12 shadow-md flex justify-center items-center"
                      />
                      <div className="box2">
                        <p className="text-lg text-gray-500 font-bold font-vare">
                          {profile.username}
                        </p>
                        <p className="font-jose text-gray-400">
                          {profile.email}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="bio font-lora text-gray-500 p-2 text-justify">
                      {profile.bio}
                    </div>
                    <hr />

                    <div className="font-jose mb-4 text-gray-400">
                      <h3 className="p-2">Skills</h3>
                      <div className="flex justify-between lg: flex-wrap">
                        {profile.skills.map((skill) => (
                          <ul className="list flex space-x-4">
                            <li className="lg:m-0 m-2 p-2 bg-gray-900 shadow space-x-2 rounded-md text-white font-vare flex">
                              {skill}
                            </li>
                          </ul>
                        ))}
                      </div>
                    </div>
                    <hr />
                    {profile.social && (
                      <div className="social flex p-4 justify-center">
                        <ul className="list flex space-x-4">
                          <li className="list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare">
                            <a href={`${profile.social.facebook}`}>
                              <FacebookIcon />
                            </a>
                          </li>
                          <li className="list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare">
                            <a href={profile.social.youtube}>
                              <YouTubeIcon />
                            </a>
                          </li>
                          <li className="list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare">
                            <a href={profile.social.linkedIn}>
                              <LinkedInIcon />
                            </a>
                          </li>
                          <li className="list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare">
                            <a href={profile.social.instagram}>
                              <InstagramIcon />
                            </a>{" "}
                          </li>
                          <li className="list-item p-2 bg-gray-100 shadow space-x-2 rounded-md text-gray-500 font-vare">
                            <a href={profile.social.twitter}>
                              <TwitterIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                    {user !== null ? (
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <Link to={`/updateprofile/${profile._id}`}>
                              Update Profile
                            </Link>
                          </div>
                          <div>
                            <Link
                              to={`/deleteprofile/${profile._id}`}
                              className="right"
                            >
                              <button className="inline-block shadow-md rounded-md p-4">
                                Delete profile
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    </Fragment>
  );
};

// About.propTypes = {
// 	getProfile: PropTypes.func.isRequired,
// 	profile: PropTypes.object.isRequired,
// 	auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
// 	profile: state.profile,
// 	auth: state.auth,
// });

export default About;
