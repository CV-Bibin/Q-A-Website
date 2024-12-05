import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import AskQuestions from './pages/AskQuestions';
import QuestionDetail from "./pages/QuestionDetail"; 
import PrivateRoute from './components/PrivateRoute'; 
import QuestionsPage from './pages/QuestionsPage';
import TagsPage from './pages/TagsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/user/:id" element={<ProfilePage />} />
       

            <Route path="/tags" element={<TagsPage />} />

        {/* Private Routes */}
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/AskQuestions" 
          element={
            <PrivateRoute>
              <AskQuestions />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/question/:id" 
          element={
            <PrivateRoute>
              <QuestionDetail />
            </PrivateRoute>
          } 
        />

        {/* Catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
