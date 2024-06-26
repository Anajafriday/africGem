import { Link } from "react-router-dom";
import AdvertList from "../ADS/AdvertList";

function LatestList() {
  return (
    <div className="mt-8 w-full lg:mt-0 lg:px-6">
      <div>
        <h3 className="text-blue-500 capitalize">Design instument</h3>

        <a
          href="#a"
          className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
        >
          How to raise $100k+ by using blox ui kit on your design
        </a>
      </div>
      <div>{/* <AdvertList classNameName="h-10" /> */}</div>
      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <div>
        <h3 className="text-blue-500 capitalize">UI Resource</h3>

        <a
          href="#a"
          className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
        >
          Should you creat UI Product by using Blox?
        </a>
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <div>
        <h3 className="text-blue-500 capitalize">Premium Collection</h3>

        <a
          href="#a"
          className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
        >
          Top 10 Blocks you can get on Blox's collection.
        </a>
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <div>
        <h3 className="text-blue-500 capitalize">Premium kits</h3>

        <a
          href="#a"
          className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
        >
          Top 10 Ui kit you can get on Blox's collection.
        </a>
      </div>
      <div>
        <h3 className="text-blue-500 capitalize">Premium kits</h3>

        <a
          href="#a"
          className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
        >
          Top 10 Ui kit you can get on Blox's collection.
        </a>
      </div>
      <div>
        <h3 className="text-blue-500 capitalize">Premium kits</h3>

        <a
          href="#a"
          className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
        >
          Top 10 Ui kit you can get on Blox's collection.
        </a>
      </div>
    </div>
  );
}

// {
//   /* <Link to="/latest?id='1'"></Link> */
// }
export default LatestList;
