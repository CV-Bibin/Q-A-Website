// src/components/UserAnswer.js

import PropTypes from 'prop-types';

function UserAnswer({ answer }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full text-xs">
          {answer.author?.[0]?.toUpperCase()} {/* Display the first letter of the author's name */}
        </div>
        <span className="font-medium">{answer.author}</span>
        <span className="text-sm text-gray-500">{answer.date}</span>
      </div>
      <div className="mt-2">
        <p className="text-gray-700">{answer.content}</p>
      </div>
      
    </div>
  );
}

// Add PropTypes validation for the 'answer' prop
UserAnswer.propTypes = {
  answer: PropTypes.shape({
    author: PropTypes.string.isRequired, // Ensure 'author' is a string and required
    date: PropTypes.string.isRequired, // Ensure 'date' is a string and required
    content: PropTypes.string.isRequired, // Ensure 'content' is a string and required
  }).isRequired, // Ensure 'answer' is required and matches the shape defined
};

export default UserAnswer;
