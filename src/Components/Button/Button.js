import React from 'react'
import './Button.css'
function Button({children}) {
  return (
    <div>
        <button className='btn btn_bg w-full text-white text-lg py-2'>
            {children}
        </button>
    </div>
  )
}

export default Button