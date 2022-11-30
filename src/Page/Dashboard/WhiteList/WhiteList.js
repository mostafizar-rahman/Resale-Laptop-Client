import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { IoCheckmark } from 'react-icons/io5'
import Button from '../../../Components/Button/Button'
import { AuthContext } from '../../../Context/AuthProvider'
import WhiteListCard from './WhiteListCard'

function WhiteList() {
  const { user } = useContext(AuthContext)
  const [products, setProduct] = useState([])

  useEffect(() => {
    axios(`https://module-78-server.vercel.app/whiteList?email=${user?.email}`)
      .then(res => setProduct(res.data))
  }, [])
  console.log(products)



  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {
          products.map((prd, i) => <WhiteListCard key={i} prd={prd} />)
        }
      </div>

    </div>
  )
}

export default WhiteList