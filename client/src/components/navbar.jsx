import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo / Brand */}
      <div>
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
          Taskero
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6">
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
      </div>
    </nav>
  )
}

export default Navbar
