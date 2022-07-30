import { PlusCircleIcon, LinkIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/outline";
import { Fragment, useContext, useState } from "react";
import storage from "../../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { createProfile } from "../../../../context/profile/profileApiCalls";
import { ProfileContext } from "../../../../context/profile/ProfileContext";
import { Navigate } from "react-router-dom";

const CreateProfile = () => {
  const [data, setData] = useState(null);
  const [transfer, setTransfer] = useState(0);

  const [media, setMedia] = useState(null);
  const [brandMedia, setBrandMedia] = useState(null);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime + item.label + item.file.name;

      const storageRef = ref(storage, `/profile/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      console.log(item.file.name, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done.`);
        },
        (err) => {
          console.log(err);
        },
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

  const { isCreated, dispatch } = useContext(ProfileContext);
  const handleTransfer = (e) => {
    e.preventDefault();
    upload([
      { file: media, label: "media" },
      { file: brandMedia, label: "brandMedia" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile(data, dispatch);
  };

  if (isCreated) {
    return <Navigate to="/admin" />;
  }

  return (
    <Fragment>
      <div className=" bg-gray-50 text-gray-800">
        <div className=" p-8">
          <div className="p-4  bg-white shadow rounded ">
            <form onSubmit={(e) => handleSubmit(e)}>
              {/* <Alert /> */}
              <div className="lg:flex lg:justify-center lg:space-x-8">
                <div className="lg:w-1/2">
                  {media && <img src={URL.createObjectURL(media)} alt="" />}
                  <div className="flex items-center justify-center text-gray-600 text-3xl font-extralight py-2 text-center">
                    <UserCircleIcon className="h-10" />
                    <>User Profile</>
                  </div>
                  <div>
                    <div className="max-w-2xl mx-auto">
                      <label
                        htmlFor="bio"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Biography
                      </label>
                      <textarea
                        name="bio"
                        id="bio"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your biography..."
                        onChange={(e) => handleChange(e)}
                      ></textarea>
                    </div>
                    <div className="max-w-2xl mx-auto py-2 ">
                      <label
                        htmlFor="desc"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Description
                      </label>
                      <textarea
                        name="desc"
                        id="desc"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your description..."
                      ></textarea>
                      <small className="font-normal   text-red-400">
                        Can be a summary of your bio write a short desc for your
                        page
                      </small>
                    </div>

                    <div className="max-w-2xl mx-auto py-2 ">
                      <label
                        htmlFor="status"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Status
                      </label>

                      <input
                        name="status"
                        id="status"
                        placeholder="e.g Artists, Developer, Designer"
                        onChange={(e) => handleChange(e)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="max-w-2xl mx-auto py-2 ">
                      <label
                        htmlFor="skills"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Skills set/Categories
                      </label>

                      <input
                        name="skills"
                        id="skills"
                        placeholder="e.g Arts, Science, Commercial"
                        onChange={(e) => handleChange(e)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <small className="font-normal   text-red-400">
                        For proper format, separate skills out with comma
                      </small>
                    </div>
                    <div className=" max-w-2xl mx-auto my-2 relative  border-dashed  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <label
                        htmlFor="media"
                        className="text-center flex flex-col justify-center items-center py-2"
                      >
                        <PlusCircleIcon className="h-10 text-gray-700 cursor-pointer" />
                        <small className="text-center text-base  block mb-2  font-medium text-gray-900 dark:text-gray-400">
                          {media ? (
                            media.name
                          ) : (
                            <>Profile Media (Images only)</>
                          )}
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

                <div className="lg:w-1/2">
                  {brandMedia && (
                    <img src={URL.createObjectURL(brandMedia)} alt="" />
                  )}
                  <div className="flex items-center justify-center text-gray-600 text-3xl font-extralight py-2 text-center">
                    <LinkIcon className="h-10" />
                    <>Page Profile</>
                  </div>
                  <div>
                    <div className="max-w-2xl mx-auto py-2 ">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Brand Title
                      </label>
                      <input
                        name="brand"
                        id="brand"
                        placeholder="Brand Title"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="max-w-2xl mx-auto py-2 ">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Publisher Name
                      </label>

                      <input
                        name="username"
                        id="username"
                        placeholder="Enter a name to desc post creator"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div>
                      <h3 className="block mt-4 text-center text-medium font-medium text-gray-900 dark:text-gray-400">
                        Social Info
                      </h3>
                      <div className="max-w-2xl mx-auto py-2 ">
                        <label
                          htmlFor="facebook"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Facebook{" "}
                        </label>
                        <input
                          name="facebook"
                          id="facebook"
                          placeholder="Facebook Link"
                          onChange={(e) => handleChange(e)}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="max-w-2xl mx-auto py-2 ">
                        <label
                          htmlFor="instagram"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Instagram{" "}
                        </label>{" "}
                        <input
                          name="instagram"
                          id="instagram"
                          placeholder="Instagram Handle"
                          onChange={(e) => handleChange(e)}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="max-w-2xl mx-auto py-2 ">
                        <label
                          htmlFor="twitter"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Twitter{" "}
                        </label>{" "}
                        <input
                          name="twitter"
                          id="twitter"
                          placeholder="Twitter Link"
                          onChange={(e) => handleChange(e)}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="max-w-2xl mx-auto py-2 ">
                        <label
                          htmlFor="youtube"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Youtube{" "}
                        </label>{" "}
                        <input
                          name="youtube"
                          id="youtube"
                          placeholder="Youtube Link"
                          onChange={(e) => handleChange(e)}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="max-w-2xl mx-auto my-2 relative  border-dashed  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <label
                        htmlFor="brandMedia"
                        className="text-center flex flex-col justify-center items-center py-2"
                      >
                        <PlusCircleIcon className="h-10 text-gray-700 cursor-pointer" />
                        <small className="text-center text-base text-gray-400">
                          {brandMedia ? (
                            <p className="text-lg text-blue-900">
                              {brandMedia.name}
                            </p>
                          ) : (
                            <>Add profile logo (Images only)</>
                          )}
                        </small>
                      </label>
                      <input
                        type="file"
                        name="brandMedia"
                        id="brandMedia"
                        hidden
                        onChange={(e) => setBrandMedia(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {transfer === 2 ? (
                <div>
                  <input
                    type="submit"
                    value="Create Profile"
                    className="inline-block w-full mt-4 py-2  mb-4 shadow-md text-base font-semibold outline-none border-none cursor-pointer"
                  />
                </div>
              ) : (
                <div>
                  <input
                    type="button"
                    value="Upload Profile"
                    className="inline-block w-full mt-4 py-2  mb-4 shadow-md text-base font-semibold outline-none border-none cursor-pointer"
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

export default CreateProfile;
