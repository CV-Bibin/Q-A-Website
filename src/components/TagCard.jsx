// src/components/TagCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function TagCard({ tag }) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">
        {/* Display the heading of the tag */}
        <Link to={`/tags/${tag.name}`} className="hover:underline">{tag.heading}</Link>
      </h3>
      <p className="mt-2 text-gray-600">{tag.description}</p>
      <div className="mt-4 text-sm text-gray-500">
        <span>{tag.questionCount} questions</span>
      </div>
    </div>
  );
}

export default TagCard;
