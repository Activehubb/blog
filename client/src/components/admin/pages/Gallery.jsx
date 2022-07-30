import React, { Fragment, useContext, useEffect } from "react";
import Header from "../../user/layouts/Header";
import Animate from "./Animate";
import "./animate.css";
import { PostContext } from "../../../context/post/PostContext";
import { getPosts } from "../../../context/post/postApiCalls";
import Footer from "../../user/layouts/footer/Footer";

const Gallery = () => {
  const { posts, dispatch } = useContext(PostContext);
  useEffect(() => {
    getPosts(dispatch);
  }, [dispatch]);

  if (posts === null) {
    return <Animate type="loading" />;
  }
  return (
    <Fragment>
      <Header />
      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            {posts.map((post) => (
              <div class="lg:flex lg:flex-wrap w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={post.media}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Gallery;
