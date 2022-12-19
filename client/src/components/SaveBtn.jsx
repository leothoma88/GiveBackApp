import React from 'react'
import {MdFavorite} from 'react-icons/md'
import { SAVE_DONATION, REMOVE_DONATION } from "../utils/mutations";

const SaveBtn = ({onClickBtn}) => {
  return (
    <>
    <div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="inline-block bg-[#191f3d] hover:bg-[#df3e56] active:bg-[#df3e56]  rounded-full px-5 py-2 text-sm font-semibold text-white mr-2 mb-3"
          onClick={onClickBtn}
        >
          <MdFavorite />
        </button>
      </div>
    </div>
    </>
  )
}

export default SaveBtn