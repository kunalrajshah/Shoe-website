import React from 'react'

const cartIcon = () => {
  return (
    <div className="absolute top-4 right-4 flex items-center">
    <div className="rounded-full border-2 border-gray-700 p-2 mr-2">
      <svg
        className="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h16M4 8h16M10 20h4M18 20a2 2 0 01-2 2H8a2 2 0 01-2-2m12-10l-2-2m-3 0l-2-2m-3 0l-2-2M6 18a2 2 0 002 2h8a2 2 0 002-2M6 8h.01M6 12h.01"
        ></path>
      </svg>
    </div>
    <span className="text-gray-700 font-semibold">Cart</span>
  </div>
  )
}

export default cartIcon;