import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSIdebar from '../Page/Dashboard/DashboardSIdebar/DashboardSIdebar'
import NavbarTop from '../Page/Shared/Navbar/NavbarTop'

function DashboardLayout() {
    return (
        <div>
            <div className='bg-[#32c4d7]  max-w-[1400px] mx-auto'>
                <NavbarTop />
            </div>
            <div className='max-w-[1400px] mx-auto flex '>
                <div className='max-w-[200px] w-full'>
                    <DashboardSIdebar />
                </div>
                <div className='ml-5 w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout