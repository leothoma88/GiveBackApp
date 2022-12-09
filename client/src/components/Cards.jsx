import React from 'react'
import photo from'../assets/charity-photo-test.avif'

const Cards = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div class="relative pb-48 overflow-hidden">
      <img class="absolute inset-0 h-full w-full object-cover transition  hover:-translate-y-1 hover:scale-110" src={ photo } alt="" />
      </div>

      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">Charity Name</p>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <button className="inline-block bg-teal-500 rounded-full px-5 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:bg-teal-400">Donate</button>
      </div>
    </div>
  )
}

export default Cards