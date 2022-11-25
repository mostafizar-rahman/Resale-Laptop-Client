import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

function NavbarTop() {
    const { user, userLogout } = useContext(AuthContext)

    return (
        <div className='flex justify-between max-w-[1400px] mx-auto pb-3'>
            <div>
                <h1 className='text-2xl font-bold'>Laptop</h1>
            </div>
            <div className='flex items-center space-x-4'>
                {user && user.uid ?
                    <>
                        <Link to='/dashboard'>Dashboard</Link>
                        <p onClick={userLogout}>Logout</p>
                    </> :
                    <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    )
}

export default NavbarTop