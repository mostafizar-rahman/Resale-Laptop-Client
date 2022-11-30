import React, { useState } from 'react'
import Button from '../../../Components/Button/Button'
import BookingModal from '../../BookingModal/BookingModal'
import Modal from 'react-modal';
import { IoCloseCircle } from 'react-icons/io5';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function AdsCard({ product }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
const {userName, sellarPrice, orignalPrice, name, yearOfUse, image, date} = product
    console.log(product)
    return (
        <div className="py-11">
            <div className="bg-white sm:h-56 rounded shadow-md sm:flex">
                <img className="sm:w-1/2 h-full rounded-l-sm bg-slate-300" src={image} alt="" />
                <div className="w-full flex flex-col">
                    <div className="p-4 pb-0 flex-1">
                        <h3 className="font-light mb-1">Model: {name}</h3>
                        <div className="text-xs flex items-center mb-4">
                            <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                            Seller: {userName}
                        </div>
                        <span className="text-4xl ">${sellarPrice}<span className="text-lg">/Selling</span></span>
                        <div className="flex items-center mt-4">
                            <div className="pr-2 text-xs">
                                <i className="fas fa-wifi"></i> ${orignalPrice} Orignal
                            </div>
                            <div className="px-2 text-xs">
                                <i className="text-grey-darker far fa-building"></i> {yearOfUse} used
                            </div>
                        </div>
                        <p className="text-xs font-light mt-1">Release Date: {date}</p>
                    </div>
                    <Button hendleClick={openModal} castomClass={'rounded-none'}>Book Now</Button>
                </div>

            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <div className='px-3 py-2'>
                        <div className='flex justify-between items-center pb-2'>
                            <p className='text-2xl font-bold'>{product.name}</p>
                            <IoCloseCircle onClick={closeModal} className='text-3xl cursor-pointer ml-10' />
                        </div>
                        <hr />
                        <div className='flex flex-col space-y-3 mt-5'>
                            <p><b>Name:</b> </p>
                            <p><b>Email:</b> </p>
                            <p><b>Price:</b> </p>
                            <input type="number" name="" placeholder='Enter your phone number' className='max-w-[400px] w-full h-10 px-3' />
                            <textarea name="" placeholder='Meeting Location' className='max-w-[400px] w-full h-36 px-3'></textarea>
                        </div>
                        <div className='w-32 mt-5'>
                            <Button >Submit</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default AdsCard