import { useState } from 'react';

function PostYourAnswer({ onPostAnswer }) {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handlePostAnswer = () => {
    if (answer.trim()) {
      onPostAnswer(answer); // Call parent function to handle posting the answer
      setAnswer(''); // Clear the text area after posting
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-sm mt-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Post Your Answer:</h3>
      
      <textarea
        value={answer}
        onChange={handleAnswerChange}
        rows="5"
        className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Write your answer here..."
      ></textarea>

      <div className="flex justify-end mt-4">
        <button
          onClick={handlePostAnswer}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
        >
          Post Answer
        </button>
      </div>
    </div>
  );
}

export default PostYourAnswer;
