import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LeftSideMenu from "../components/LeftSideMenu";
import TagInput from "../components/TagInput"; // Import your TagInput component

function AskQuestionPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // You can now manage tags directly within the TagInput component, no need for separate state in this component.
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handlePostQuestion = () => {
    // Add logic to post the question, like API call to save the question.
    console.log("Question posted:", { title, body });
    navigate("/"); // Redirect to the home page after posting
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Body */}
      <LeftSideMenu />
      <main className="flex-1 flex pt-[80px] px-6">
        {/* Form Section */}
        <div className="max-w-3xl w-full mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Ask a question</h1>

          {/* Title Input */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-lg font-semibold text-gray-900">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter the title of your question"
              value={title}
              onChange={handleTitleChange}
            />
            <p className="mt-2 text-sm text-gray-500">Be specific and imagine you’re asking a question to another person.</p>
          </div>

          {/* Body Input */}
          <div className="mb-6">
            <label htmlFor="body" className="block text-lg font-semibold text-gray-900">
              Body*
            </label>
            <textarea
              id="body"
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Include all the information someone would need to answer your question"
              value={body}
              onChange={handleBodyChange}
            />
          </div>

          {/* Tags Input - Will manage the 5 tags */}
          <TagInput />

          {/* Post Question Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handlePostQuestion}
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
            >
              Post Question
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AskQuestionPage;
