import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Page/Shared/Footer/Footer'
import Navbar from '../Page/Shared/Navbar/Navbar'

function Main() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main