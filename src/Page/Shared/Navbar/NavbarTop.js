import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

function NavbarTop() {
    const { user, userLogout } = useContext(AuthContext)

    return (
        <div className='flex justify-between max-w-[1400px] mx-auto pt-3 pb-4 px-2'>
            <div className='sm:flex items-center'>
                <img className='w-14 h-14' src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/device-laptop-icon.png" alt="" />
                <h1 className='text-2xl font-bold'>Laptop House</h1>
            </div>
            <div className='flex items-center space-x-4'>
                {user && user.uid ?
                    <>
                        <Link to='/dashboard'>Dashboard</Link>
                        <button className='btn border border-[#3ac1d5] rounded-full bg-white px-6 py-2' onClick={userLogout}>Logout</button>
                    </> :
                    <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    )
}

export default NavbarTop