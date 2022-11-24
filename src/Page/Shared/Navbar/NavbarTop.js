import React from 'react'
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function NavbarTop() {
    return (
        <div className='flex justify-between max-w-[1400px] mx-auto pb-3'>
            <div>
                <h1 className='text-2xl font-bold'>Laptop</h1>
            </div>
            <div className='flex items-center space-x-4'>
                <IoHeartOutline className='text-2xl font-bold cursor-pointer'/>
                <IoCartOutline className='text-2xl font-bold cursor-pointer'/>
                <Link to='/login' className=''>Login</Link>
            </div>
        </div>
    )
}

export default NavbarTop