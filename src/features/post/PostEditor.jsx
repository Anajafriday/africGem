import { PiImage } from "react-icons/pi";

function PostEditor() {
  return (
    <div className="bg-slate-50 w-full flex items-center justify-center hidde">
      <div className=" w-full  p-8 rounded-md">
        <form>
          <div className="mb-6 ">
            {/* <label
              htmlFor="postContent"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Post Content:
            </label> */}
            <textarea
              id="postContent"
              name="postContent"
              rows="4"
              className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
                  sm:leading-5 resize-none focus:outline-none focus:border-yellow-500"
              placeholder="What's on your mind?"
            ></textarea>
            <span className="text-gray-500 text-sm">Max 280 characters</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="mb-6 cursor-pointer">
              <label
                htmlFor="fileAttachment"
                className="block text-gray-700  font-bold mb-2 cursor-pointer"
              >
                <PiImage className="h-6 w-6" />{" "}
              </label>
              <input
                type="file"
                id="fileAttachment"
                name="fileAttachment"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer hidden"
              />
              {/* <div className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-yellow-500 transition duration-150 ease-in-out hidden">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                  strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                <span className="ml-2 text-sm text-gray-600">
                  Choose a file
                  </span>
                  </div>
                  <span className="text-sm text-gray-500">Max file size: 5MB</span>
                </div> */}
            </div>
            <button
              type="submit"
              className="flex justify-center items-center bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:shadow-outline-yellow text-white py-2 px-4 rounded-md transition duration-300 gap-2"
            >
              {" "}
              Post{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                id="send"
                fill="#fff"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostEditor;
