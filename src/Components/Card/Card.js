import React, { useState } from 'react'
import BookingModal from '../../Page/BookingModal/BookingModal';
import Button from '../Button/Button'

function Card({ product }) {
    const { image, name, orignal_price, resale_price, seller_name, years_use } = product;
    const [modal, setModal] = useState(false)

    const hendleOpenModal = () => {
        setModal(true)
    }

    return (
        <div className='max-w-[1400px] mx-auto'>
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
                        <Button hendleClick={hendleOpenModal}>Buy Now</Button>
                    </div>
                </div>
            </div>

                {

                    modal ? <BookingModal modal={modal} setModal={setModal} product={product} /> : ''
                }

        </div>
    )
}

export default Card