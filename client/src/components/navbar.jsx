import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-[#f5ebe1] shadow-md px-16 py-5 flex justify-between items-center sticky top-0 z-50">
      {/* Logo / Brand */}
      <div>
        <Link to="/" className="text-3xl font-bold text-black-600 hover:text-blue-800">
          Taskero
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <Link 
          to="/" 
          className="text-gray-700 hover:text-blue-600 transition duration-200"
        >
          Home
        </Link>
        <Link 
          to="/login" 
          className="text-gray-700 hover:text-blue-600 transition duration-200"
        >
          Login
        </Link>
        <Link 
          to="/register" 
          className="text-gray-700 hover:text-blue-600 transition duration-200"
        >
          Signup
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
