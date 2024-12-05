import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../data/Credentials';  // Import the addUser function

function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation for passwords
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Create new user data
    const newUser = {
      fullName,
      email,
      password,
    };

    // Call addUser function to register user
    const isRegistered = addUser(newUser);

    if (isRegistered) {
      alert('Registration successful! You can now log in.');
      navigate('/LoginPage'); 
    } else {
      setErrorMessage('User already registered!');
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
          <h2 className="mt-6 text-2xl font-bold text-gray-900">Create your account</h2>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-6 mt-8">
          {/* Full Name Field */}
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="full-name"
                name="full-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Display Error Message */}
          {errorMessage && (
            <div className="mt-2 text-center text-red-600">{errorMessage}</div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/LoginPage" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
