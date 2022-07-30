import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import "../../admin/pages/animate.css";
import { getProfiles } from "../../../context/profile/profileApiCalls";
import { ProfileContext } from "../../../context/profile/ProfileContext";
import Animate from "../../admin/pages/Animate";

const Card = ({ post }) => {
  const { profile, dispatch } = useContext(ProfileContext);
  useEffect(() => {
    getProfiles(dispatch);
  }, [dispatch]);

  if (profile === null) {
    return <Animate type="loading" />;
  }

  return (
    <Fragment>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article class="overflow-hidden rounded-lg shadow-lg">
          <a href={post.media} rel="noreferrel">
            <img
              alt="Placeholder"
              class="block h-auto w-full"
              src={post.media}
            />
          </a>

          <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">
              <a class="no-underline hover:underline text-black" href="#">
                {post.title}
              </a>
            </h1>
            <p class="text-grey-darker text-sm">
              {new Date(post.createdAt).toDateString()}
            </p>
          </header>

          <footer class="flex border-t border-gray-200 items-center justify-between leading-none p-2 md:p-4">
            {profile.map((profile) => (
              <a
                class="flex items-center no-underline hover:underline text-black"
                href={`${profile.media}`}
                // target="_blank"
                rel="noreferrel"
              >
                <img
                  alt="Placeholder"
                  class="block rounded-full w-12 h-12 shadow"
                  src={profile.media}
                />
                <p class="ml-2 text-sm">{profile.username}</p>
              </a>
            ))}
          </footer>
          <div className="p-4 ">
            <div className="font-lora text-gray-600 font-medium  postDesc">
              {post.desc}
            </div>
            <Link
              to={`/post/${post._id}`}
              className="p-2  mt-2 inline-block border-solid border text-sm outline-none text-gray-600 font-light ml-2 rounded "
            >
              READ MORE
            </Link>
          </div>
        </article>
      </div>
    </Fragment>
  );
};

export default Card;
