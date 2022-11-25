import React from 'react'
import './Button.css'
function Button({children, hendleClick, castomClass}) {
  return (
    <div>
        <button onClick={hendleClick} className={`btn btn_bg w-full text-white text-lg py-2 px-3 rounded-md ${castomClass}`}>
            {children}
        </button>
    </div>
  )
}

export default Button