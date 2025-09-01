import React from 'react'
import { Link } from "react-router-dom";
import Bannerillustration from '../assets/bannerImage.jpg'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 bg-[#f5ebe1]">
    {/* Left Content */}
    <div className="text-center md:text-left max-w-lg space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Your Smart Task Management Solution
      </h1>
      <p className="text-lg text-gray-600 pb-4">
        Taskero helps you manage your daily tasks, set priorities, and stay focused — all in one place.
      </p>
      <Link
        to="/signup"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
  Start Managing Tasks
</Link>
    </div>
  
    {/* Right Image */}
    <div className="mt-8 md:mt-0 md:ml-12">
      <img
        src={Bannerillustration}
        alt="Project Management Illustration"
        className="w-[560px] md:w-[660px] lg:w-[780px]"
      />
    </div>
  </div>
  
  )
}

export default Home
