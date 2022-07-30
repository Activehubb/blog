import React, { Fragment, useContext, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import storage from "../../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { createPost } from "../../../../context/post/postApiCalls";
import { PostContext } from "../../../../context/post/PostContext";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const [data, setData] = useState("");
  const [transfer, setTransfer] = useState(0);

  const [media, setMedia] = useState(null);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime + item.label + item.file.name;

      const spaceRef = ref(storage, `/images/${fileName}`);

      const uploadTask = uploadBytesResumable(spaceRef, item.file);
      console.log(item.file, item.file.name);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done...`);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setData((data) => {
              return { ...data, [item.label]: url };
            });
            setTransfer((data) => data + 1);
          });
        }
      );
    });
  };

  const { isCreated, dispatch } = useContext(PostContext);

  const handleTransfer = (e) => {
    e.preventDefault();
    upload([{ file: media, label: "media" }]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    createPost(data, dispatch);
  };
  if (isCreated) {
    return <Navigate to="/" />;
  }
  console.log(data);
  return (
    <Fragment>
      <div className="bg-white h-full py-8">
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="-mx-1 lg:-mx-4">
            <div>
              <form onSubmit={(e) => handleUpload(e)} className="p-2">
                {media && (
                  <img
                    src={URL.createObjectURL(media)}
                    alt=""
                    className="mt-4"
                  />
                )}

                <div className=" text-gray-600 text-3xl font-extralight py-2 text-center">
                  <>Add a Post</>
                </div>
                <div className="max-w-2xl mx-auto">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Post Title
                  </label>
                  <input
                    name="title"
                    id="title"
                    placeholder="Start with a something catchy..."
                    onChange={(e) => handleChange(e)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="max-w-2xl mx-auto">
                  <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Post Description
                  </label>
                  <textarea
                    name="desc"
                    id="bio"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Start writing a post..."
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
                <div className="max-w-2xl mx-auto">
                  <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Post Category
                  </label>
                  <input
                    name="category"
                    id="category"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Give your post a keyword, Can be painting, blog, design, arts works..."
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <div className=" max-w-2xl mx-auto my-2 relative  border-dashed  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <label
                      htmlFor="media"
                      className="text-center flex flex-col justify-center items-center py-2"
                    >
                      <PlusCircleIcon className="h-10 text-gray-700 cursor-pointer" />
                      <small className="text-center text-base text-gray-400">
                        {media ? media.name : <>Post Media (Images only)</>}
                      </small>
                    </label>
                    <input
                      type="file"
                      name="media"
                      id="media"
                      hidden
                      onChange={(e) => setMedia(e.target.files[0])}
                    />
                  </div>
                </div>
                {transfer === 1 ? (
                  <div className="max-w-2xl mx-auto">
                    <button
                      type="submit"
                      value="Create Post"
                      className=" bg-green-400  text-white rounded-sm inline-block w-full mt-4 py-2  mb-4 shadow-md text-base font-semibold outline-none border-none cursor-pointer"
                    >
                      {" "}
                      Create Post
                    </button>
                  </div>
                ) : (
                  <div className="max-w-2xl mx-auto">
                    <button
                      type="submit"
                      value="Upload Post"
                      className=" bg-blue-400 max-w-2xl mx-auto text-white rounded-sm inline-block w-full mt-4 py-2  mb-4 shadow-md text-base font-semibold outline-none border-none cursor-pointer"
                      onClick={handleTransfer}
                    >
                      {" "}
                      Upload Post{" "}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatePost;
