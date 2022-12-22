import React from 'react'

function Modal() {
    return (
        <div>
            {
                modal && <div className='fixed top-0 left-0 w-full h-full bg-slate-50 bg-opacity-40 z-50'>
                    <div className='bg-gray-300 absolute top-1/2 left-1/2 min-w-[300px] min-h-[400px] -translate-x-1/2 -translate-y-1/2'>
                        <div className='px-3 py-2'>
                            <div className='flex justify-between items-center pb-2'>
                                <p className='text-2xl font-bold'>{product.name}</p>
                                <IoCloseCircle onClick={hendleCloseModal} className='text-3xl cursor-pointer ml-10' />
                            </div>
                            <hr />
                            <div className='flex flex-col space-y-3 mt-5'>
                                <p><b>Name:</b> {user?.displayName}</p>
                                <p><b>Email:</b> {user?.email}</p>
                                <p><b>Price:</b> ${product.resale_price}</p>
                                <input onBlur={(e) => setNumber(e.target.value)} type="number" name="" placeholder='Enter your phone number' className='max-w-[400px] w-full h-10 px-3' />
                                <textarea onBlur={(e) => setLocation(e.target.value)} name="" placeholder='Meeting Location' className='max-w-[400px] w-full h-36 px-3'></textarea>
                            </div>
                            <div className='w-32 mt-5'>
                                <Button hendleClick={hendleAddDbProduct}>Submit</Button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default Modal