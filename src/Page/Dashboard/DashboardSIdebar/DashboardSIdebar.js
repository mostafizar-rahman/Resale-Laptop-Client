import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider'

function DashboardSIdebar() {

  const [userRole, setUserRole] = useState('')
  const { user } = useContext(AuthContext)

  useEffect(() => {
    axios.get(`http://localhost:5000/user?email=${user?.email}`)
      .then(res => setUserRole(res))
  }, [user?.email])
  console.log(userRole.data?.userRole)

  return (
    <div>
      <div className='bg-[#32c4d7]  min-h-[600px] h-full px-2 py-4'>
        <ul className='space-y-6'>
          {userRole.data?.userRole === 'admin' &&
            <>
              <li><Link to='/dashboard/admin'>Admin</Link></li>
              <li><Link to='/dashboard/buyer'>Buyer</Link></li>
              <li><Link to='/dashboard/seller'>Seller</Link> </li>
          </>
          }
        {userRole.data?.userRole === 'buyer' && <li><Link to='/dashboard/buyer'>Buyer</Link></li>}
        {userRole.data?.userRole === 'seller' && <li><Link to='/dashboard/seller'>Seller</Link> </li>}
      </ul>
    </div>
    </div >
  )
}

export default DashboardSIdebar