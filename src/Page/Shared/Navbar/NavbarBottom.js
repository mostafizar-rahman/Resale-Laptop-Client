import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavbarBottom.css'

function NavbarBottom() {
    return (
        <div className='flex justify-between items-center mt-3  max-w-[1400px] mx-auto'>
            <div className='categoty'>
                <h3 className='underline '>All Category</h3>
                <div className='category_menu'>
                    <Link>Home</Link>
                </div>
            </div>
            <div className='space-x-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/Block'>Block</NavLink>
            </div>
        </div>

    )
}

export default NavbarBottom