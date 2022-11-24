import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import Button from '../../Components/Button/Button';

function BookingModal({ product, modal, setModal }) {
    console.log(product)
    const hendleCloseModal = () => {
        setModal(false)
    }
    return (
        <div>
            {
                modal && <div className='fixed top-0 left-0 w-full h-full bg-slate-50 bg-opacity-40 z-100'>
                    <div className='bg-gray-300 absolute top-1/2 left-1/2 w-[700px] min-h-[400px] -translate-x-1/2 -translate-y-1/2'>
                        <div className='px-3 py-2'>
                            <div className='flex justify-between items-center pb-2'>
                                <p className='text-2xl font-bold'>{product.name}</p>
                                <IoCloseCircle onClick={hendleCloseModal} className='text-3xl cursor-pointer' />
                            </div>
                            <hr />
                            <p><b>Price:</b>${product.resale_price}</p>
                            <div className='w-32'>
                                <Button>Submit</Button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default BookingModal