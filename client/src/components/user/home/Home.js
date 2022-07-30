import Posts from "../posts/Posts";
import Header from "../layouts/Header";
import Footer from "../layouts/footer/Footer";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { PostContext } from "../../../context/post/PostContext";
import Animate from "../../admin/pages/Animate";
import { getPosts } from "../../../context/post/postApiCalls";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);
  const { posts, dispatch } = useContext(PostContext);
  useEffect(() => {
    getPosts(dispatch);
  }, [ dispatch]);

  if (posts === null) {
    return <Animate type="loading" />;
  }

  // Get current posts
  const indexOfLastPosts = currentPage * postPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <>
        <Header />

        <Posts
          currentPosts={currentPosts}
          postPerPage={postPerPage}
          posts={posts}
          currentPage={currentPage}
          paginate={paginate}
        />

        <Footer />
      </>
    </Fragment>
  );
};

// Home.propType = {
// 	post: PropTypes.object.isRequired,
// 	getPost: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
// 	post: state.posts,
// });

export default Home;
