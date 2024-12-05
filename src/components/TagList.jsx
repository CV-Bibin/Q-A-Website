// src/components/TagList.js

import PropTypes from 'prop-types';

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.length ? (
        tags.map((tag, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))
      ) : (
        <span className="text-gray-500">No tags available</span>
      )}
    </div>
  );
}

// Prop validation to ensure `tags` is an array of strings
TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,  // `tags` should be an array of strings
};

export default TagList;
