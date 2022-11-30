import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'
import useTitle from '../../../Hooks/useTItle'

function Dashboard() {
  const {user} = useContext(AuthContext)
  useTitle('Dashbord')
  return (
    <div className='max-w-[1400px] h-[calc(100vh-60px)]  mx-auto flex justify-center items-center'>
      <div className='text-center'>
        <h4 className='text-2xl font-bold'>Hello <span className='text-emerald-500'>{user.displayName}</span></h4>
        <h1 className='text-5xl font-bold'>Wellcome To Dashbord</h1>
      </div>
    </div>
  )
}

export default Dashboard