
import axios from 'axios';
import React, {useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { IoCheckmark } from 'react-icons/io5';
import { AuthContext } from '../../Context/AuthProvider';
import BookingModal from '../../Page/BookingModal/BookingModal';
import Button from '../Button/Button'

function Card({ product }) {
    const {user} = useContext(AuthContext)
    const {_id, image, name, orignalPrice, sellarPrice, userName, yearOfUse, verifiedStatud, date } = product;
    const [modal, setModal] = useState(false)
    console.log(product)
    const hendleOpenModal = () => {
        setModal(true)
    }

    const hendleAddWhiteList = () => {
        const whiteListProduct = {
            image,
            name,
            orignalPrice, 
            sellarPrice,
            userName,
            yearOfUse,
            date,
            verifiedStatud,
            email: user.email,
            userName: user.displayName,
            orignalProductId: _id

        }
        fetch('https://module-78-server.vercel.app/whiteList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(whiteListProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product Add WhiteList')
            })
    }

    return (
        <div className='max-w-[1400px] mx-auto'>
            <div>
                <div className="shadow-md ">
                    <img src={image} alt="" className="object-cover object-center w-full  h-72 bg-slate-300" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="font-light ">Model: {name}</h2>
                            <p className="text-xs flex items-center">Sellar: {userName}{verifiedStatud === 'verifide' ? <IoCheckmark className='text-green-500 ml-2 text-base font-semibold' /> : ''}</p>
                            <div className='py-2'>
                                <span className="text-4xl ">${sellarPrice}<span className="text-lg">/Selling</span></span>
                                <div className="pr-2 text-xs">$ {orignalPrice} Orignal</div>
                            </div>
                            <div className='flex justify-between'>
                                <p className="text-sm font-light">Use: {yearOfUse}</p>
                                <p className="text-sm font-light">Release Date: {date}</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <Button castomClass={'rounded-none'} hendleClick={hendleOpenModal}>Buy Now</Button>
                        <Button castomClass={'rounded-none'} hendleClick={hendleAddWhiteList}>Add WhiteList</Button>
                    </div>
                </div>
                {
                    modal ? <BookingModal modal={modal} setModal={setModal} product={product} orignalProductId={_id} /> : ''
                }
            </div>
        </div>
    )
}

export default Card