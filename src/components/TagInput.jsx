import { useState } from "react";

function TagInput() {
  const [tag, setTag] = useState(""); // Current value in the input field
  const [tags, setTags] = useState([]); // Array of added tags

  // Handle input change
  const handleInputChange = (e) => setTag(e.target.value);

  // Add tag to the tags array (only if the tag count is less than 5)
  const handleAddTag = () => {
    if (tag && !tags.includes(tag) && tags.length < 5) {
      setTags([...tags, tag]);
      setTag(""); // Clear input after adding
    }
  };

  // Remove tag from the tags array
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {/* Input Field for Tags */}
      <div className="mb-4">
        <input
          type="text"
          value={tag}
          onChange={handleInputChange}
          placeholder="Enter tag"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAddTag}
          className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md"
          disabled={tags.length >= 5} // Disable the Add button if there are 5 tags
        >
          Add
        </button>
      </div>

      {/* Display Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg"
          >
            {tag}
            <button
              onClick={() => handleRemoveTag(tag)}
              className="ml-2 text-indigo-600"
            >
              <svg
                viewBox="0 0 14 14"
                className="w-4 h-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4l6 6m0-6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
