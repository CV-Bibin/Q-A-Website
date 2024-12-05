import { useParams } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import posts from "../data/post"; // Ensure the correct path to the data
import LeftSideMenu from '../components/LeftSideMenu';
import Navbar from '../components/Navbar';
import answers from '../data/Answers'; 
import UserAnswer from '../components/UserAnswer';
import TagList from '../components/TagList';
import Footer from "../components/Footer";
import PostYourAnswer from '../components/PostYourAnswer';

function QuestionDetail() {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [questionAnswers, setQuestionAnswers] = useState([]);  // Initialize questionAnswers as an empty array

  useEffect(() => {
    // Find the post by its ID
    const questionPost = posts.find((post) => post.id === parseInt(id));
    setPost(questionPost);

    // Find answers for this specific post
    const postAnswers = answers.find((answer) => answer.questionId === parseInt(id));
    if (postAnswers) {
      setQuestionAnswers(postAnswers.answers);  // Extract answers array
    }
  }, [id]);  // Dependency on id, so the effect reruns if the question id changes

  if (!post) return <div>Loading...</div>;  // Show loading state if post is not found

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Main content with fixed left sidebar */}
      <main className="flex-1 pt-[80px] flex">
        {/* Left Sidebar */}
        <LeftSideMenu />
        
        {/* Content area, with padding-left to offset the sidebar */}
        <div className="flex-1 p-6 bg-white overflow-y-auto ml-72">
          {/* Question details */}
          <div className="bg-white p-6 rounded-md shadow-sm">
            {/* Question Title */}
            <h1 className="text-3xl font-semibold text-gray-900">{post.title}</h1>

            {/* Posted by and Date section */}
            <div className="flex items-center text-gray-500 mt-2 mb-4">
              {/* Avatar */}
              <div className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full text-xs">
                {post.author[0]?.toUpperCase()} {/* Added optional chaining */}
              </div>
              <span className="ml-2 font-medium">{post.author}</span>
              <span className="ml-2 text-sm">{post.date}</span>
            </div>

            {/* Border separator */}
            <div className="border-t border-gray-300 mb-4"></div>

            {/* Flex container for the description and vote buttons */}
            <div className="flex space-x-4">
              {/* Left side: Upvote, Score, Downvote */}
              <div className="flex flex-col items-center space-y-2">
                {/* Upvote Button with custom SVG icon inside a circular button */}
                <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                  <svg aria-hidden="true" className="svg-icon iconArrowUp" width="12" height="12" viewBox="0 0 18 18">
                    <path d="M1 12h16L9 4z"></path>
                  </svg>
                </button>

                {/* Score */}
                <span className="text-xl font-semibold">{post.votes}</span>

                {/* Downvote Button with custom SVG icon inside a circular button */}
                <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                  <svg aria-hidden="true" className="svg-icon iconArrowDown" width="12" height="12" viewBox="0 0 18 18">
                    <path d="M1 6h16L9 14z"></path>
                  </svg>
                </button>
              </div>

              {/* Right side: Description */}
              <div className="flex-1">
                <p className="text-gray-500">{post.description}</p>
              </div>
            </div>

            {/* Answers Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700">Answers:</h3>
              {questionAnswers.length > 0 ? (
                <div className="text-green-500">
                  {questionAnswers.length} answers available
                </div>
              ) : (
                <p>No answers yet.</p>
              )}
            </div>
            
            {/* Tags Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700">Tags:</h3>
              <TagList tags={post.tags} />  {/* Use the TagList component here */}
            </div>

             {/* User Answers Section */}
             <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-700"></h3>
              {questionAnswers.length > 0 ? (
               <div className="mt-8">
               <h3 className="text-xl font-semibold text-gray-700">User Answers:</h3>
               {questionAnswers.length > 0 ? (
                 <div className="space-y-6 mt-4">
                   {questionAnswers.map((answer, index) => (
                     <UserAnswer key={index} answer={answer} /> 
                   ))}
                 </div>
               ) : (
                 <p>No answers available yet.</p>
               )}
             </div>
              ) : (
                <p>No answers available yet.</p>
              )}
            </div>
          </div>
          <PostYourAnswer/>
        </div>
       
      </main>
      <Footer/>
    </div>
  );
}

export default QuestionDetail;
