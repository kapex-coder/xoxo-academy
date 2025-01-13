import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // Icon for warning

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4 ">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto">
        <FaExclamationTriangle className="mx-auto text-red-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
