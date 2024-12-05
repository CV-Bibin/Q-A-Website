// src/pages/HomePage.jsx

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import LeftSideMenu from "../components/LeftSideMenu";
import posts from "../data/post";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import AskQuestionButton from "../components/AskQuestionButton";

function HomePage() {
  const navigate = useNavigate();

  // Redirect to login page if not logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Pagination 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Retrieve the user's name from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? user.fullName : "Guest"; // Use fullName from user object

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Body */}
      <main className="flex-1 flex pt-[80px]">
        {/* Fixed Left Sidebar */}
        <LeftSideMenu />

        {/* Middle Section - Scrollable */}
        <div className="flex-1 p-6 bg-white overflow-y-auto ml-72">
          {/* Greeting Section */}
          <div className="mb-6 flex justify-between items-center ">
            <div>
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Welcome to Stack Overflow{" "}
              <span className="text-indigo-600"></span>,
              <span className="font-bold text-indigo-700">{userName}!</span>
            </p>
            <p className="text-lg text-gray-600">
              Find answers to your technical questions and help others answer
              theirs.
            </p>
            </div>
            <AskQuestionButton />
          </div>

          {/* Top Recent Questions */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Top Recent Questions
            </h1>
          </div>

          {/* Display Posts */}
          <div className="mt-10">
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} /> // Use PostCard component for each post
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPosts={posts.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
