import React from 'react'
import './Button.css'
function Button({children, hendleClick}) {
  return (
    <div>
        <button onClick={hendleClick} className='btn btn_bg w-full text-white text-lg py-2 rounded-md'>
            {children}
        </button>
    </div>
  )
}

export default Button