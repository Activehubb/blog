import { Fragment } from "react";
import Pagination from "../pagination";
import AllPost from "../post/Post";
import "./post.css";

const Posts = ({ posts, postPerPage, currentPosts, paginate, currentPage }) => {
  return (
    <Fragment>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {currentPosts.map((data) => (
            <AllPost post={data}/>
          ))}
        </div>
      </div>
      <Pagination
        currentPosts={currentPosts}
        postPerPage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Fragment>
  );
};

export default Posts;
