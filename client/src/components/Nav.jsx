import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex justify-end">
        <div className="space-x-4 space-y-4 mr-10">
          <Link className="inline-block px-9 py-2.5 bg-pink-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/login'>Login/Sign Up</Link>
          <Link className="inline-block px-9 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/'>Home</Link>
          <Link className="inline-block px-9 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/profile'>Profile</Link>
          <Link className="inline-block px-9 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/about'>About Us</Link>
        </div>
      </div>
  )
}

export default Nav



