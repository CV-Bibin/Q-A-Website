// src/pages/ProfilePage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { userData } from "../data/userData";  
import ProfilePic from "../components/ProfilePic";  
import LeftSideMenu from '../components/LeftSideMenu';
import Navbar from '../components/Navbar';
import EditProfile from "../components/EditProfile"; 
import ChangePassword from "../components/ChangePassword"; 
import DeleteAccount from "../components/DeleteAccount"; 
import ThemeSwitcher from "../components/ThemeSwitcher"; 
import Footer from "../components/Footer";

const ProfilePage = () => {
  const { id } = useParams(); 

  
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  
  if (!loggedInUser || loggedInUser.id !== parseInt(id)) {
    return <div>User not found or unauthorized access!</div>;
  }

  
  const user = userData.find(u => u.id === parseInt(id));

  
  if (!user) {
    return <div className="text-center text-red-500">User not found!</div>;
  }

  
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LeftSideMenu /> {/* Left Sidebar */}

      <div className="flex-1 p-8 ml-72 mt-16">
        {/* Profile Header Section */}
        <div className="flex items-start space-x-8">
          {/* Profile Picture and Info Section */}
          <div className="flex-shrink-0">
            <ProfilePic src={user.profilePic} alt={user.name} size="32" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-800">{user.name}</h1>
            <div className="mt-2 text-gray-500 text-sm">
              <span>Member for 10 days | Last seen this week | Visited 6 days, 4 consecutive</span>
            </div>

            <div className="mt-4 text-gray-700">{user.bio}</div>
            <div className="mt-2 text-gray-500">{user.location}</div>
            <div className="mt-4">
              <span className="font-semibold text-gray-700">Reputation:</span>
              <span className="ml-2 text-gray-900">{user.ReputationPoints}</span>
            </div>
          </div>

          {/* Right-side section  */}
          <div className="ml-auto flex items-center space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => setActiveTab("editProfile")}
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tags Following Section */}
        <div className="p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags Following</h3>
          <div className="flex flex-wrap gap-4">
            {user.tagsFollowing.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Switchable Tabs */}
        <div className="mt-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              Themes
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "settings" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              Account Settings
            </button>
            <button
              onClick={() => setActiveTab("editProfile")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "editProfile" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              Edit Profile
            </button>
          </div>

          {/* Themes- not working */}
          {activeTab === "profile" && (
            <div className="mt-6">
              <ThemeSwitcher />
            </div>
          )}

          {/* Conditional Rendering of Profile, Settings, or EditProfile */}
          <div className="flex justify-start items-center min-h-screen mt-6">
           
            {activeTab === "settings" && (
              <div className="bg-white p-6 rounded-md">
                <ChangePassword />
                <DeleteAccount />
              </div>
            )}
            {activeTab === "editProfile" && (
              <EditProfile user={user} />
            )}
          </div>
        </div>
      </div>
       <Footer/>
    </div>
  );
 
};

export default ProfilePage;
