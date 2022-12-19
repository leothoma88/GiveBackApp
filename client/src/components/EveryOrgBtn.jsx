import React from 'react'

export const EveryOrgBtn = ({ onClickBtn, ein }) => {
  return (
    <>
    <div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="inline-block bg-[#191f3d] hover:bg-[#df3e56]  rounded-full px-5 py-2 text-sm font-semibold text-white mr-2 mb-3"
          onClick={onClickBtn}
        >
          Open in Every.org
          <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-white opacity-75 ml-2"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white ml-2">
          </span>
        </button>
      </div>
    </div>
    </>
  )
}

export default EveryOrgBtn