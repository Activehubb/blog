import React, { Fragment, useEffect } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/footer/Footer";
import "./post.css";
import { Link, useLocation } from "react-router-dom";
import Animate from "../../admin/pages/Animate";
import { getSinglePost } from "../../../context/post/postApiCalls";
import { useContext } from "react";
import { PostContext } from "../../../context/post/PostContext";
import { AuthContext } from "../../../context/auth/AuthContext";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { post, dispatch } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    getSinglePost(path, dispatch);
  }, [path, dispatch]);
  if (post === null) {
    return <Animate type="loading" />;
  }
  return (
    <Fragment>
      <>
        <Header />

        <div className=" flex justify-center items-center flex-col ">
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
                  Published on: {new Date(post.createdAt).toDateString()}
                </p>
              </header>

              <footer>
               
                <div className="p-4  border-t border-gray-200 ">
                  <div className="font-lora text-gray-600 font-medium">
                    {post.desc}
                  </div>
                </div>
                <ul className="list flex space-x-4 border-t border-gray-200 content-center p-4">
                  {post.category.split(",").map((data) => (
                    <li className="lg:m-0 m-2 p-2 bg-gray-900 shadow space-x-2 rounded-md text-white font-vare flex">
                      {data}
                    </li>
                  ))}
                </ul>
              </footer>
            </article>
          </div>
        </div>

        {user !== null ? (
          <div className="flex flex-wrap, justify-evenly item-center py-4">
            <div className="left">
              <Link to={`/updpost/${post._id}`}>
                <button className="bg-green-700 text-white font-500 inline-block shadow-md rounded-md p-4">
                  Update post
                </button>
              </Link>
            </div>
            <Link to={`/deletepost/${post._id}`} className="right">
              <button className="bg-red-700 text-white font-500 inline-block shadow-md rounded-md p-4">
                Delete post
              </button>
            </Link>
          </div>
        ) : (
          <></>
        )}

        <Footer />
      </>
    </Fragment>
  );
};

export default SinglePost;
