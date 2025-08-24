import { useNavigate } from "react-router-dom";

export const AskMe = () => {
  const navigate = useNavigate();
  return (
    <div class="flex flex-col items-center justify-center h-screen ">
      <h1 class="mb-2 text-2xl font-bold">Welcome to Ask Me</h1>

      <a
        href="#"
        class="block max-w-sm p-6 my-10 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div class="flex flex-row justify-evenly mt-4 text-blue-600 hover:underline dark:text-blue-500">
          <button
            type="button"
            onClick={() => navigate("/signInPage")}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign-in
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            SignUp
          </button>
        </div>
      </a>
    </div>
  );
};
