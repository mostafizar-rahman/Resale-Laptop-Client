import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Outlet } from 'react-router-dom'
import DashboardSIdebar from '../Page/Dashboard/DashboardSIdebar/DashboardSIdebar'
import NavbarTop from '../Page/Shared/Navbar/NavbarTop'

function DashboardLayout() {
    const [toggle, setToggle] = useState(true)
    const hendleSidebar = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <div className='bg-[#32c4d7]  max-w-[1400px] mx-auto'>
                <NavbarTop />
            </div>
            <div className='max-w-[1400px] mx-auto grid grid-cols-[200px_auto] '>

                <div className={`${toggle ? 'sm:block'  : 'hidden'}`} >
                    <DashboardSIdebar />
                </div>

                <div className='md:ml-5 ml-0'>
                    <div className='block sm:hidden'>
                        <IoMenu onClick={hendleSidebar} className='text-3xl' />
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout