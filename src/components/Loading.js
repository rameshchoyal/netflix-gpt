import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="text-white text-lg font-semibold flex items-center space-x-2">
        <svg
          className="animate-spin h-8 w-8 text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8.001 8.001 0 0120 12h-4a3.998 3.998 0 00-3.515-3.97L10 8.42V4h-.032A8.027 8.027 0 014 12.373zM16.42 14A8.027 8.027 0 0120 11.967V12h4c0 6.627-5.373 12-12 12v-4h-.032A7.985 7.985 0 0116.42 14z"
          ></path>
        </svg>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
