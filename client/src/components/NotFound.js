import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1659197416~exp=1659198016~hmac=213fc89a8d8727bc1cb5153fa9a71bbd340381501830b4e36c822a5dbea43f5c"
            alt="notfound"
          />
          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>

          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
        </div>

        <div className="flex flex-col mt-48">
          <div className="text-gray-400 font-bold uppercase">Continue With</div>

          <div className="flex flex-col items-stretch mt-5">
            <div
              className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
            >
              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i
                  className="mdi mdi-home-outline mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"
                ></i>
              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <a
                  href="/"
                  className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline"
                >
                  Home Page
                </a>

                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                >
                  Everything starts here
                </div>
              </div>

              <i
                className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"
              ></i>
            </div>

            <div
              className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
            >
              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i
                  className="mdi mdi-book-open-page-variant-outline mx-auto 
                            text-indigo-800 text-2xl md:text-3xl"
                ></i>
              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <a
                  href="/about"
                  className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline"
                >
                  About
                </a>

                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                >
                  Want to know about me
                </div>
              </div>

              <i
                className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"
              ></i>
            </div>

            <div
              className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
            >
              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i
                  className="mdi mdi-archive-settings-outline 
                            mx-auto text-indigo-800 text-2xl md:text-3xl"
                ></i>
              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <a
                  href="/gallery"
                  className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline"
                >
                  Gallery
                </a>

                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                >
                  Browse throug recents work of ARTS
                </div>
              </div>

              <i
                className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"
              ></i>
            </div>

            {/* <div
              className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
            >
              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i
                  className="mdi mdi-at mx-auto 
                            text-indigo-800 text-2xl md:text-3xl"
                ></i>
              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                  Contact
                </div>

                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                >
                  Contact us for your questions
                </div>
              </div>

              <i
                className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"
              ></i>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
