"use client";

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="bg-black flex flex-row justify-around items-center py-4">
        <img
          src="final.png"
          className="mt-4 transform transition-transform duration-300 hover:scale-110"
          height={100}
          width={200}
          alt="Logo"
        />

        <div>
          <ul className="text-white flex flex-row justify-between gap-3 items-center text-xl">
            {['Resources', 'News', 'Topics', 'Inspiration', 'Jobs'].map((item) => (
              <li
                key={item}
                className="hover:text-gray-300 transform transition-transform duration-300 hover:scale-110"
              >
                <a href="#" className="link-with-gradient">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <FaSearch
          className="text-white hover:text-gray-300 cursor-pointer transform transition-transform duration-300 hover:scale-110"
          size={24}
          onClick={toggleModal}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full transition-transform duration-300 transform scale-100">
            <button
              className="absolute top-4 right-4 text-white hover:text-red-500"
              onClick={toggleModal}
            >
              <MdClose size={24} />
            </button>
            <h2 className="text-xl mb-4 text-white">Search for a Blog</h2>
            <input
              type="text"
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search..."
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-400 mb-2">I’m looking for</h3>
              <ul className="text-white space-y-2">
                <li className="hover:text-indigo-500 cursor-pointer">Tasks</li>
                <li className="hover:text-indigo-500 cursor-pointer">Projects</li>
                <li className="hover:text-indigo-500 cursor-pointer">Notes</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
