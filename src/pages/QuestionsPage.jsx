// src/pages/QuestionsPage.jsx

import React, { useState } from 'react';
import LeftSideMenu from '../components/LeftSideMenu';
import Navbar from '../components/Navbar';
import posts from '../data/post'; 
import PostCard from '../components/PostCard'; 
import Pagination from '../components/Pagination';
import Footer from "../components/Footer";
import AskQuestionButton from "../components/AskQuestionButton";

function QuestionsPage() {
  const [sortOption, setSortOption] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const postsPerPage = 10; // Number of posts to show per page

  const sortPosts = (option) => {
    switch (option) {
      case 'newest':
        return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'active':
        return [...posts].sort((a, b) => b.votes - a.votes);
      case 'unanswered':
        return posts.filter(post => post.answers === 0);
      case 'myQuestions':
        return posts; // Placeholder for user-specific filtering
      default:
        return posts;
    }
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortedPosts = sortPosts(sortOption);

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // Update the current page

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LeftSideMenu /> {/* Left Sidebar */}

      <div className="flex-1 p-8 ml-72 mt-16">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {sortOption === 'newest' ? 'Newest Questions' :
             sortOption === 'unanswered' ? 'Unanswered Questions' :
             sortOption === 'active' ? 'Active Questions' :
             'My Questions'}
          </h1>

          
        </div>

        <div className="mt-4 flex justify-between items-center ">
          <p className="text-lg text-gray-600">Total Questions: {sortedPosts.length}</p>
          <AskQuestionButton/>
        </div>

        <div className="mt-4 flex space-x-4">
          <button 
            className={`px-4 py-2 rounded-md ${sortOption === 'newest' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
            onClick={() => handleSortChange('newest')}
          >
            Newest
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${sortOption === 'active' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
            onClick={() => handleSortChange('active')}
          >
            Active
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${sortOption === 'unanswered' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
            onClick={() => handleSortChange('unanswered')}
          >
            Unanswered
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${sortOption === 'myQuestions' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
            onClick={() => handleSortChange('myQuestions')}
          >
            My Questions
          </button>
        </div>

        <div className="mt-10">
          {/* Display the current posts based on the current page */}
          {currentPosts.map((post) => (
            <PostCard key={post.id} post={post} /> // Use the PostCard component here
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPosts={sortedPosts.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default QuestionsPage;
