
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../../../Components/Button/Button'
import { AuthContext } from '../../../Context/AuthProvider'
import PaymentModal from '../PaymentModal/PaymentModal'



function MyOrders() {

    const { user } = useContext(AuthContext)
    const [prodcuts, setProducts] = useState([])
    const [modal, setModal] = useState(false)


    useEffect(() => {
        axios.get(`http://localhost:5000/product?email=${user?.email}`)
            .then(res => setProducts(res.data))
    }, [user?.email])


    const hendleOpenModal = () => {
        setModal(true)
        console.log('click')
    }

    return (
        <div className='mt-8'>
            {/* -----------Heading------------ */}
            <h1 className='text-4xl font-bold'>My Orders</h1>
            {/* -----------div------------ */}
            <div className=" mt-7">
                <div className="w-full text-xs text-left ">
                    <div>
                        <div className="bg-gray-300 hidden  sm:grid sm:grid-cols-[100px_auto_auto_auto_auto]">
                            <div className="p-3">No</div>
                            <div className="p-3">Image</div>
                            <div className="p-3">Title</div>
                            <div className="p-3">Price</div>
                            <div className="p-3">Payment</div>
                        </div>
                    </div>
                    <div className='border-b border-b-gray-300'>
                        {
                            prodcuts?.length === 0 ?
                                // ------------condaition for loading no item
                                <div><div className='text-2xl text-yellow-600 '> "No item"</div></div> :
                                prodcuts?.map((prodcut, index) => {
                                    const { productName, price, image } = prodcut
                                    // --------- Review Items
                                    return (
                                        <div key={prodcut._id} className="grid  sm:grid-cols-[100px_auto_auto_auto_auto] break-words ">
                                            <div className="px-3 py-2 flex items-center">
                                                <p className='sm:hidden font-semibold text-base'>No: </p>
                                                <p className='sm:ml-0 ml-3'>{index + 1}</p>
                                            </div>
                                            <div className="px-3 py-2 flex items-center">
                                                <p className='sm:hidden font-semibold text-base'>Image: </p>
                                                <img src={image} alt="" className='w-10 h-10 sm:ml-0 ml-3 object-contain' />
                                            </div>
                                            <div className="px-3 py-2 flex items-center">
                                                <p className='sm:hidden font-semibold text-base'>Title: </p>
                                                <p className='sm:ml-0 ml-3'>{productName}</p>
                                            </div>
                                            <div className="px-3 py-2 flex items-center">
                                                <p className='sm:hidden font-semibold text-base'>Price: </p>
                                                <p className='sm:ml-0 ml-3'>{price}</p>
                                            </div>

                                            <div className="px-3 py-2 flex items-center">
                                                <p className='sm:hidden font-semibold text-base'>Payment: </p>
                                                <Button hendleClick={hendleOpenModal} castomClass={'py-1 sm:ml-0 ml-3'}>Payment</Button>
                                            </div>
                                            {
                                                modal ? <PaymentModal modal={modal} setModal={setModal} price={price} /> : ''
                                            }
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
            {/* {
                modal ? <PaymentModal modal={modal} setModal={setModal} /> : ''
            } */}
        </div>
    )
}

export default MyOrders