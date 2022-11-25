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
            <div className='max-w-[1400px] mx-auto grid md:grid-cols-[200px_auto] '>
                <div className=''>
                    <DashboardSIdebar />
                </div>
                <div className='ml-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout