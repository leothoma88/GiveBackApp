import React from 'react';


export const DonateBtn = ({onClickBtn}) => {
  return (
    <div>
         <div className="px-6 pt-4 pb-2">
        <button className="inline-block bg-pink-500 rounded-full px-5 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:bg-teal-400" onClick={onClickBtn}>Donate</button>
      </div>
    </div>
  )
}
