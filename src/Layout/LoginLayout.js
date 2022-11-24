import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Page/Shared/Navbar/Navbar'

function LoginLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default LoginLayout