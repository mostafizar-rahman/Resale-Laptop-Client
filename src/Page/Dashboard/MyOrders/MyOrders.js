import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../../../Components/Button/Button'
import { AuthContext } from '../../../Context/AuthProvider'

function MyOrders() {

    const { user } = useContext(AuthContext)
    const [prodcuts, setProducts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/product?email=${user?.email}`)
            .then(res => setProducts(res.data))
    }, [user?.email])
    console.log(prodcuts)

    return (
        <div className='mt-8'>
            {/* -----------Heading------------ */}
            <h1 className='text-4xl font-bold'>My Orders</h1>
            {/* -----------div------------ */}
            <div className=" mt-7">
                <div className="w-full text-xs text-left ">
                    <div>
                        <div className="bg-gray-300 hidden  lg:grid grid-cols-5">
                            <div className="p-3">No</div>
                            <div className="p-3">Image</div>
                            <div className="p-3">Title</div>
                            <div className="p-3">Price</div>
                            <div className="p-3">Payment</div>
                        </div>
                    </div>
                    <div>
                        {
                            prodcuts?.length === 0 ?
                                // ------------condaition for loading no item
                                <div><div className='text-2xl text-yellow-600'> "No item review"</div></div> :
                                prodcuts?.map((prodcut, index) => {
                                    const { productName, price } = prodcut
                                    // --------- Review Items
                                    return (
                                        <div key={prodcut._id} className="grid lg:grid-cols-5 md:grid-cols-5 break-words">
                                            <div className="px-3 py-2 md:col-span-2 lg:col-span-1">
                                                <p className='lg:hidden font-semibold text-base'>No: </p>
                                                <p>{index + 1}</p>
                                            </div>
                                            <div className="px-3 py-2 md:col-span-2 lg:col-span-1">
                                                <img src="https://wallpaperaccess.com/full/1393334.jpg" alt="" className='w-10 h-10' />
                                            </div>
                                            <div className="px-3 py-2">
                                                <p className='lg:hidden font-semibold text-base'>Title: </p>
                                                <p>{productName}</p>
                                            </div>
                                            <div className="px-3 py-2">
                                                <p className='lg:hidden font-semibold text-base'>Price: </p>
                                                <p>{price}</p>
                                            </div>

                                            <div className="px-3 py-2 ">
                                                <p className='lg:hidden font-semibold text-base'>Payment: </p>
                                                <div className='flex  items-center'>
                                                    <Button castomClass={'py-1'}>Payment</Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders