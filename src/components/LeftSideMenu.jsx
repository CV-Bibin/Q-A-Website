import { Link, useLocation } from 'react-router-dom';

function LeftSideMenu() {
  const location = useLocation(); // Get current route

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path ? 'bg-gray-300' : ''; 

  return (
    <div className="w-66 bg-white p-6 border-r border-gray-400 fixed top-0 left-0 h-full z-10">
      <ul className="flex flex-col items-center space-y-2 mt-20">
        {/* Home Link */}
        <li
          className={`text-sm font-semibold text-gray-900 p-3 ml-14 rounded-md cursor-pointer w-full text-left ${isActive('/')}`}
        >
          <Link to="/">
            <svg
              aria-hidden="true"
              className="svg-icon iconHome h-5 w-5 inline-block mr-2 text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 18 18"
            >
              <path d="M15 10v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5H0l9-9 9 9zm-8 1v6h4v-6z"></path>
            </svg>
            Home
          </Link>
        </li>

        {/* Questions Link */}
        <li
          className={`text-sm font-semibold text-gray-900 p-3 ml-14 rounded-md cursor-pointer w-full text-left ${isActive('/questions')}`}
        >
          <Link to="/questions">
            <svg
              aria-hidden="true"
              className="svg-icon iconQuestion h-5 w-5 inline-block mr-2 text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 18 18"
            >
              <path d="m4 15-3 3V4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v9c0 1.09-.91 2-2 2zm7.75-3.97c.72-.83.98-1.86.98-2.94 0-1.65-.7-3.22-2.3-3.83a4.4 4.4 0 0 0-3.02 0 3.8 3.8 0 0 0-2.32 3.83q0 1.93 1.03 3a3.8 3.8 0 0 0 2.85 1.07q.94 0 1.71-.34.97.66 1.06.7.34.2.7.3l.59-1.13a5 5 0 0 1-1.28-.66m-1.27-.9a5 5 0 0 0-1.5-.8l-.45.9q.5.18.98.5-.3.1-.65.11-.92 0-1.52-.68c-.86-1-.86-3.12 0-4.11.8-.9 2.35-.9 3.15 0 .9 1.01.86 3.03-.01 4.08"></path>
            </svg>
            Questions
          </Link>
        </li>

        {/* Tags Link */}
        <li
          className={`text-sm font-semibold text-gray-900 p-3 ml-14 rounded-md cursor-pointer w-full text-left ${isActive('/tags')}`}
        >
          <Link to="/tags">
            <svg
              aria-hidden="true"
              className="svg-icon iconTags h-5 w-5 inline-block mr-2 text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 18 18"
            >
              <path d="M9.24 1a3 3 0 0 0-2.12.88l-5.7 5.7a2 2 0 0 0-.38 2.31 3 3 0 0 1 .67-1.01l6-6A3 3 0 0 1 9.83 2H14a3 3 0 0 1 .79.1A2 2 0 0 0 13 1z" opacity=".4"></path>
              <path d="M9.83 3a2 2 0 0 0-1.42.59l-6 6a2 2 0 0 0 0 2.82L6.6 16.6a2 2 0 0 0 2.82 0l6-6A2 2 0 0 0 16 9.17V5a2 2 0 0 0-2-2zM12 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4"></path>
            </svg>
            Tags
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideMenu;
