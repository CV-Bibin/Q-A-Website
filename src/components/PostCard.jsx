// src/components/PostCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import TagList from './TagList'; // Import TagList component for displaying tags

function PostCard({ post }) {
  return (
    <div className="p-6 bg-gray-50 border rounded-md shadow-sm flex flex-col md:flex-row gap-4">
      {/* Left Column: Votes, Answers, Views */}
      <div className="flex flex-col justify-center space-y-2 md:w-1/6 md:ml-auto">
        <div className="flex justify-end items-center space-x-2">
          <span className="font-semibold text-gray-700">Votes:</span>
          <span className="text-gray-500">{post.votes}</span>
        </div>

        <div className={`flex justify-end items-center space-x-2 ${post.answers > 0 ? 'text-green-500' : 'text-gray-500'}`}>
          <span className="font-semibold text-gray-700">Answers:</span>
          <span>{post.answers}</span>
        </div>

        <div className="flex justify-end items-center space-x-2">
          <span className="font-semibold text-gray-700">Views:</span>
          <span className="text-gray-500">{post.views}</span>
        </div>
      </div>

      {/* Right Column: Title, Description, Tags, Author, Date */}
      <div className="flex-1 md:ml-4 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          <a href={`/question/${post.id}`} className="hover:underline">
            {post.title}
          </a>
        </h3>
        <p className="text-gray-500">{post.description}</p>

        <div className="flex flex-wrap justify-between items-center text-sm mt-4">
          {/* Tags */}
          <TagList tags={post.tags} />

          {/* Author and Date */}
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="w-6 h-6 flex items-center justify-center bg-indigo-600 text-white rounded-full text-xs">
              {post.author[0].toUpperCase()}
            </div>

            <a href={`/profile/${post.author}`} className="font-semibold text-gray-800 hover:underline">
              {post.author}
            </a>

            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Prop validation to ensure `post` has the correct shape
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    answers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default PostCard;
