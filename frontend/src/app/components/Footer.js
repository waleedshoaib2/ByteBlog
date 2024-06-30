// components/Footer.js
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-around">
          <div className="flex flex-col items-center md:items-start md:mr-8">
            <div className="mb-8 text-center md:text-left">
              <img src="final.png" alt="Logo" className="h-48 w-48 mb-4" />
              <p className="text-lg font-bold mb-2">Subscribe to get tips and tactics to grow the way you want.</p>
              <div className="flex justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-3 rounded-l-md bg-gray-100 text-black focus:outline-none"
                />
                <button className="p-3 bg-yellow-500 text-black rounded-r-md">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-gray-500 text-center md:text-left">© ByteBlog</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-8 mt-8 md:mt-0 md:justify-start">
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <a href="#" className="hover:underline">Resources</a>
              <a href="#" className="hover:underline">News</a>
              <a href="#" className="hover:underline">Topics</a>
              <a href="#" className="hover:underline">Inspiration</a>
              <a href="#" className="hover:underline">Jobs</a>
              <a href="#" className="hover:underline">Interview</a>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <a href="#" className="hover:underline">Graphic Design</a>
              <a href="#" className="hover:underline">Product Design</a>
              <a href="#" className="hover:underline">Illustration</a>
              <a href="#" className="hover:underline">Photography</a>
              <a href="#" className="hover:underline">Art & Culture</a>
              <a href="#" className="hover:underline">Animation</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter size="1.5em" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF size="1.5em" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size="1.5em" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaPinterestP size="1.5em" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaDribbble size="1.5em" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
