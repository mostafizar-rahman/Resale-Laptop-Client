import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSIdebar from '../Page/Dashboard/DashboardSIdebar/DashboardSIdebar'
import Navbar from '../Page/Shared/Navbar/Navbar'

function DashboardLayout() {
    return (
        <div>
            <Navbar />
            <div className='max-w-[1400px] mx-auto flex '>
                <div className='max-w-[200px] w-full'>
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