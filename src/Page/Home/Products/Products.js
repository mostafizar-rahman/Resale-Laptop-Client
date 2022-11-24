import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Card from '../../../Components/Card/Card'
import Product from './Product'

function Products() {
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/products')
      const data = await res.json()
      return data
    }
  })


  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className='grid grid-cols-4 gap-5'>
        {
          products.map(product => <Card key={product._id} product={product} />)
        }
      </div>

    </div>
  )
}

export default Products