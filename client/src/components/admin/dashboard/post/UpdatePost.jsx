import React, { Fragment, useState, useContext } from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { PostContext } from "../../../../context/post/PostContext";
import { updatePostId } from "../../../../context/post/postApiCalls";
import { Navigate, useLocation } from "react-router-dom";
import storage from "../../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

const UpdatePost = () => {
  const [data, setData] = useState(null);
  const [transfer, setTransfer] = useState(0);

  const [media, setMedia] = useState(null);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime + item.label + item.file.name;

      const spaceRef = ref(storage, `/postupdate/${fileName}`);

      const uploadTask = uploadBytesResumable(spaceRef, item.file);

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

  const { isUpdated, dispatch } = useContext(PostContext);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const handleTransfer = (e) => {
    e.preventDefault();

    upload([{ file: media, label: "media" }]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    updatePostId(path, data, dispatch);
  };
  if (isUpdated) {
    return <Navigate to={`/post/${path}`} />;
  }
  console.log(data);
  return (
    <Fragment>
      <div className=" bg-gray-50 text-gray-800 h-full py-8">
        <div className=" flex justify-center items-center h-screen">
          <div className="p-4 w-1/2 bg-white shadow rounded">
            <form onSubmit={(e) => handleUpload(e)}>
              {media && (
                <img src={URL.createObjectURL(media)} alt="" className="mt-3" />
              )}

              <div className="flex justify-center items-center text-gray-600 text-3xl font-extralight py-2 text-center">
                <>Update Post</>
              </div>
              <div>
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
                {/* <label htmlFor="title">
                  <h3 className="text-base py-2 font-semibold text-gray-400">
                    Post Title
                  </h3>
                </label>
                <input
                  name="title"
                  id="title"
                  placeholder="Enter a Title..."
                  className="p-1 my-2 w-full outline-none  bg-transparent text-base pointer-events-auto border-b"
                  onChange={(e) => handleChange(e)}
                /> */}
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
              </div>
              {transfer === 1 ? (
                <div>
                  <input
                    type="submit"
                    value="Update Post"
                    className="inline-block w-full mt-4 py-2  mb-4 shadow-md text-base font-semibold outline-none border-none rounded-md cursor-pointer bg-purple-900 text-white"
                  />
                </div>
              ) : (
                <div>
                  <input
                    type="button"
                    value="Upload Post"
                    className="inline-block w-full mt-4 py-2  mb-4 shadow-md text-base font-semibold outline-none border-none rounded-md cursor-pointer bg-purple-900 text-white"
                    onClick={handleTransfer}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdatePost;
