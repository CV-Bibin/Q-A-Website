// src/components/VoteSection.js

import PropTypes from 'prop-types';

function VoteSection({ votes, onUpvote, onDownvote, isVoted }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Upvote Button */}
      <button 
        className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={onUpvote}
        disabled={isVoted} // Disable if the user has voted
      >
        <svg aria-hidden="true" className="svg-icon iconArrowUp" width="12" height="12" viewBox="0 0 18 18">
          <path d="M1 12h16L9 4z"></path>
        </svg>
      </button>

      {/* Score */}
      <span className="text-xl font-semibold">{votes}</span>

      {/* Downvote Button */}
      <button 
        className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={onDownvote}
        disabled={isVoted} // Disable if the user has voted
      >
        <svg aria-hidden="true" className="svg-icon iconArrowDown" width="12" height="12" viewBox="0 0 18 18">
          <path d="M1 6h16L9 14z"></path>
        </svg>
      </button>
    </div>
  );
}

// Add PropTypes validation
VoteSection.propTypes = {
  votes: PropTypes.number.isRequired, // votes should be a number
  onUpvote: PropTypes.func.isRequired, // onUpvote should be a function
  onDownvote: PropTypes.func.isRequired, // onDownvote should be a function
  isVoted: PropTypes.bool.isRequired, // to indicate if the user has already voted
};

export default VoteSection;
