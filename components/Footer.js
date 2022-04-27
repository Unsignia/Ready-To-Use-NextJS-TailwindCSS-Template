export default function Footer() {
  var year = new Date().getFullYear();

  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800 border dark:border-gray-700">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="" className="flex items-center mb-4 mb-0 ">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Website
          </span>
        </a>
        <ul className="flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {year}{" "}
        <a href="" className="hover:underline">
          Website
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
