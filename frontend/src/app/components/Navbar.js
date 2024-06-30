import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='bg-black flex flex-row justify-around items-center py-4'>
        <img 
          src="final.png"
          className='mt-4 transform transition-transform duration-300 hover:scale-110'
          height={100}
          width={200}
          alt="Logo"
        />

        <div>
          <ul className='text-white flex flex-row justify-between gap-3 items-center text-xl'>
            <li className='hover:text-gray-300 transform transition-transform duration-300 hover:scale-110'>
              <a href="#" className="link-with-gradient">Resources</a>
            </li>
            <li className='hover:text-gray-300 transform transition-transform duration-300 hover:scale-110'>
              <a href="#" className="link-with-gradient">News</a>
            </li>
            <li className='hover:text-gray-300 transform transition-transform duration-300 hover:scale-110'>
              <a href="#" className="link-with-gradient">Topics</a>
            </li>
            <li className='hover:text-gray-300 transform transition-transform duration-300 hover:scale-110'>
              <a href="#" className="link-with-gradient">Inspiration</a>
            </li>
            <li className='hover:text-gray-300 transform transition-transform duration-300 hover:scale-110'>
              <a href="#" className="link-with-gradient">Jobs</a>
            </li>
            <li className='hover:text-gray-300 transform transition-transform duration-300 hover:scale-110'>
              <a href="#" className="link-with-gradient">Inspiration</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
