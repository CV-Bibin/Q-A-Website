// src/components/AskQuestionButton.jsx

import { useNavigate } from "react-router-dom";

const AskQuestionButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition duration-200"
      onClick={() => navigate("/AskQuestions")}
    >
      Ask Question
    </button>
  );
};

export default AskQuestionButton;
