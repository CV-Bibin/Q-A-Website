// src/components/SearchableComboBox.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchableComboBox({ items, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);

  // Filter items based on the query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  // Handle the change in the input field
  const handleInputChange = (e) => {
    onChange(e.target.value);
    setIsOpen(true); // Open the dropdown when typing
  };

  // Handle the selection of an item from the list
  const handleItemClick = (item) => {
    onChange(item.name);  // Update the input with the selected tag
    setIsOpen(false);  // Close the dropdown
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Allow click event to be processed
        placeholder={placeholder}
        className="w-full sm:w-80 md:w-96 lg:w-1/4 p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-expanded={isOpen ? 'true' : 'false'}
      />
      {isOpen && filteredItems.length > 0 && (
        <div
          role="listbox"
          className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10"
          style={{ maxHeight: '200px', overflowY: 'auto' }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={index}
              role="option"
              className="p-3 hover:bg-indigo-50 cursor-pointer"
              onClick={() => handleItemClick(item)} // Select the tag
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
      {isOpen && filteredItems.length === 0 && (
        <div
          role="listbox"
          className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10"
        >
          <p className="p-3 text-gray-500">No results found</p>
        </div>
      )}
    </div>
  );
}

SearchableComboBox.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchableComboBox;
