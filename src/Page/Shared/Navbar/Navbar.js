import React from 'react'
import NavbarBottom from './NavbarBottom'
import NavbarTop from './NavbarTop'

function Navbar() {
  return (
    <div>
      <NavbarTop />
      <div className='border-t-gray-300 border-t'></div>
      <NavbarBottom />
    </div>
  )
}

export default Navbar