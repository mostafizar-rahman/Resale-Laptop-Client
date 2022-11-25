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
      <div className='bg-[#32c4d7]  h-[calc(100vh-60px)]  px-2 py-4'>
        <ul className='space-y-6 mt-5'>
          <Link to='/' className='flex justify-center'>
            <button className='btn border border-gray-800 rounded-full px-5 py-2 bg-white'>Back To Home</button>
          </Link>
          <hr />
          {
            userRole.data?.userRole === 'admin' &&
            <>
              <li><Link to='/dashboard/admin'>Admin</Link></li>
              <li><Link to='/dashboard/buyer'>Buyer</Link></li>
              <li><Link to='/dashboard/seller'>Seller</Link> </li>
            </>
          }
          {
            userRole.data?.userRole === 'buyer' &&
            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
          }
          {
            userRole.data?.userRole === 'seller' &&
            <>
              <li><Link to='/dashboard/myProduct'>My Product</Link></li>
              <li><Link to='/dashboard/addProduct'>Add Prodcut</Link> </li>
            </>
          }

        </ul>
      </div>
    </div >
  )
}

export default DashboardSIdebar