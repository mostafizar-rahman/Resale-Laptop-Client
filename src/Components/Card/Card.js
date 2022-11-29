
import React, { useState } from 'react'
import { IoCheckmark } from 'react-icons/io5';
import BookingModal from '../../Page/BookingModal/BookingModal';
import Button from '../Button/Button'

function Card({ product }) {

    const { image, name, orignalPrice, sellarPrice, userName, yearOfUse, verified } = product;
    const [modal, setModal] = useState(false)


    const hendleOpenModal = () => {
        setModal(true)
    }
    console.log(product)
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div>
                <div className="shadow-md ">
                    <img src={image} alt="" className="object-cover object-center w-full  h-72 bg-slate-300" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="font-light ">Model: {name}</h2>
                            <p className="text-xs flex items-center">Sellar: {userName}{verified === 'verified' ? <IoCheckmark className='text-green-500 ml-2 text-base font-semibold' /> : ''}</p>
                            <div className='py-2'>
                                <span className="text-4xl ">${sellarPrice}<span className="text-lg">/Selling</span></span>
                                <div className="pr-2 text-xs">$ {orignalPrice} Orignal</div>
                            </div>
                            <p className="text-sm font-light">Use: {yearOfUse}</p>
                        </div>
                    </div>
                    <Button castomClass={'rounded-none'} hendleClick={hendleOpenModal}>Buy Now</Button>
                </div>
                {

                    modal ? <BookingModal  modal={modal} setModal={setModal} product={product} /> : ''
                }
            </div>
        </div>
    )
}

export default Card