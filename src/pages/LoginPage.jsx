import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../data/Credentials';  

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault();

    // Get the user from Credentials.js based on email and password
    const userData = getUser(email, password);

    if (userData) {
      // If credentials match, login is successful
      alert(`Login successful as ${userData.role}!`);

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));

      // Redirect based on user role
      if (userData.role === 'admin') {
        navigate('/');  // Redirect to the home page (admin)
      } else if (userData.role === 'user') {
        navigate('/user-home');  // Redirect to user homepage
      }
    } else {
      // If credentials do not match, show error
      setErrorMessage('Incorrect email or password');
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <img
            alt="Logo image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png?20190716190036"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">Sign in to your account</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6 mt-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Display Error Message */}
          {errorMessage && (
            <div className="mt-2 text-center text-red-600">{errorMessage}</div>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
