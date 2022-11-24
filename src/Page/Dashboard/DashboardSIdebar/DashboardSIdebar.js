import React from 'react'
import { Link } from 'react-router-dom'

function DashboardSIdebar() {
  return (
    <div>
        <div className='bg-[#32c4d7]  min-h-[600px] h-full px-2 py-4'>
        <ul className='space-y-6'>
          <li>
            <Link to='/dashboard/admin'>Admin</Link>
          </li>
          <li>
            <Link to='/dashboard/buyer'>Buyer</Link>
          </li>
          <li>
            <Link to='/dashboard/seller'>Seller</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardSIdebar