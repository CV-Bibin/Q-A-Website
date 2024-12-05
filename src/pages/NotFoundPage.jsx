
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {/* Single container for Heading and Message */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow-lg rounded-lg p-8">
        {/* Heading */}
        <div className="text-center">
          <img
            alt="Logo image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png?20190716190036"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Oops! Page Not Found
          </h2>
        </div>

        {/* Message */}
        <p className="mt-6 text-center text-gray-600">
          The page you are looking for doesn&apos;t exist. You might want to go back to the{' '}
          <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
            home page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
