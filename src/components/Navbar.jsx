import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfilePic from "./ProfilePic";  
import Notification from "./Notification";

const Navbar = () => {
  const navigate = useNavigate();

  // Retrieve the user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // Remove the user from localStorage
    localStorage.removeItem("user");

    // Navigate to the login page
    navigate("/LoginPage");  // Redirect to login page after logout
  };

  return (
    <nav className="bg-white px-8 py-4 fixed top-0 left-0 right-0 z-50 shadow-none border-b border-gray-400">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo Image and Brand Name */}
        <div className="flex items-center space-x-3">
          <img
            alt="Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png?20190716190036"
            className="h-10 w-auto"
          />
          <div className="text-gray-800 font-bold text-xl">Stack Overflow</div>
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              {/* User Info Section */}
              <div className="flex items-center space-x-3">
                {/* User Profile Link */}
                <Link to={`/user/${user.id}`} className="flex items-center space-x-2">
                  {/* User Profile Image or First Letter using ProfilePic component */}
                  <ProfilePic src={user.profilePic} alt={user.name} size="10" />

                  {/* User Name */}
                  <span className="text-gray-800 font-medium">{user.name}</span>
                </Link>
              </div>

              {/* Notification Icon (Custom Image) */}
              <div className="relative flex items-center cursor-pointer">
                <Notification/>
              </div>

              {/* Get Premium Account Icon with Curved Circle Border */}
              <div className="flex items-center cursor-pointer border-2 border-yellow-500 rounded-full p-2 hover:bg-yellow-100">
                <img 
                  src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/excellence-honor-icon.png" 
                  alt="Get Premium" 
                  className="h-6 w-6 text-yellow-500" 
                />
                <span className="ml-2 text-gray-800 font-medium">Get Premium</span>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="text-gray-800 hover:text-blue-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login Link */}
              <Link to="/LoginPage" className="text-gray-800 hover:text-blue-500">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
