import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; // Search icon
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger menu icons

function Navbar({ isAuthenticated, userName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle hamburger menu
  const [searchTerm, setSearchTerm] = useState(""); // Search input state

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term: ", searchTerm); // Replace with actual search logic
  };

  return (
    <nav className="bg-white text-black border-b border-black">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold ">
          Blogo
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiX size={24} className="text-black" />
            ) : (
              <HiMenu size={24} className="text-black" />
            )}
          </button>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex items-center space-x-6">
          

          {isAuthenticated ? (
            <>
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 rounded-md text-gray-800 focus:outline-none"
                />
               
              </form>
              <Link to="/dashboard" className="hover:text-teal-400 transition">
                Dashboard
              </Link>
              <Link to="/category" className="hover:text-teal-400 transition">
                Category
              </Link>
             
              <Link
                to="/blog-archive"
                className="hover:text-teal-400 transition"
              >
                Blog Archive
              </Link>
              <Link to="/profile" className="hover:text-teal-400 transition">
                Profile
              </Link>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-white text-black border border-black px-4 py-2 rounded-md  hover:bg-gray-200 transition "
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-black p-4 space-y-4 border-b border-black">
          
          {isAuthenticated ? (
            <>
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 rounded-md text-gray-800 focus:outline-none"
                />
                {/* <button
                  type="submit"
                  className="w-12 h-12 bg-teal-500 text-white flex items-center justify-center rounded-full shadow-md hover:bg-teal-600 transition"
                >
                  <FiSearch size={20} />
                </button> */}
              </form>
              <Link
                to="/dashboard"
                className="block hover:text-teal-400 transition"
              >
                Dashboard
              </Link>
              <Link
                to="/category"
                className="block hover:text-teal-400 transition"
              >
                Category
              </Link>
              <Link
                to="/profile"
                className="block hover:text-teal-400 transition"
              >
                Profile
              </Link>
              <Link
                to="/blog-archive"
                className="block hover:text-teal-400 transition"
              >
                Blog Archive
              </Link>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
