


const Header = () => {
    return (
      <nav className="bg-white shadow-md px-8 py-4">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo Image and Brand Name */}
          <div className="flex items-center space-x-3">
            <img
              alt="Logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png?20190716190036"
              className="h-10 w-auto"
            />
            <div className="text-gray-800 font-bold text-xl">
              Stack Overflow
            </div>
          </div>
  
          {/* Centered Search Bar */}
          <div className="relative flex items-center w-1/3 mx-auto">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="absolute right-3 text-gray-500 w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
  
          {/* Navbar Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Questions
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Header;
  