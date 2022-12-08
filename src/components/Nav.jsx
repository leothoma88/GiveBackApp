import React from 'react'

const Nav = () => {
  return (
    <div className="flex justify-end">
        <div className="space-x-4 space-y-4 mr-10">
          <button type="button" className="inline-block px-9 py-2.5 bg-pink-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Primary</button>
          <button type="button" className="inline-block px-9 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Secondary</button>
        </div>
      </div>
  )
}

export default Nav