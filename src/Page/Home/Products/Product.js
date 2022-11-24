import React from 'react'
import Button from '../../../Components/Button/Button'

function Product({ product }) {
    const { image, name, orignal_price, resale_price, seller_name, years_use } = product
    return (
        <div>
            <div className=" rounded-md shadow-md ">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                        <div className='flex justify-between py-3'>
                            <p className="text-sm"> <b>Orignal Price:</b> ${orignal_price}</p>
                            <p className="text-sm"> <b>Resale Price:</b> ${resale_price}</p>
                        </div>

                        <p className="text-sm"> <b>Sellar Name:</b> {seller_name}</p>
                        <p className="text-sm"> <b>Years of use:</b> {years_use}</p>

                    </div>
                    <Button>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Product