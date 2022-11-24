import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../../Components/Card/Card'

function ProductWIthCategory() {
    const products = useLoaderData()
    return (
        <div className='max-w-[1400px] mx-auto'>
            
            <div className='grid grid-cols-4 gap-5 mt-5'>
                {
                    products.map(product => <Card key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}

export default ProductWIthCategory