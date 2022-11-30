import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { IoCheckmark } from 'react-icons/io5'
import Button from '../../../Components/Button/Button'
import { AuthContext } from '../../../Context/AuthProvider'
import BookingModal from '../../BookingModal/BookingModal'

function WhiteList() {
  const { user } = useContext(AuthContext)
  const [products, setProduct] = useState([])
  const [modal, setModal] = useState(false)
  useEffect(() => {
    axios(`http://localhost:5000/whiteList?email=${user?.email}`)
      .then(res => setProduct(res.data))
  }, [])
  console.log(products)

  const hendleOpenModal = () => {
    setModal(true)
  }

  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {
          products.map((prd, i) => {
            const { image, name, userName, verified, sellarPrice, orignalPrice, date, yearOfUse } = prd
            return (
              <div key={i}>
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
                      <div className='flex justify-between'>
                        <p className="text-sm font-light">Use: {yearOfUse}</p>
                        <p className="text-sm font-light">Release Date: {date}</p>
                      </div>
                    </div>
                  </div>

                  <Button castomClass={'rounded-none'} hendleClick={hendleOpenModal}>Buy Now</Button>

                </div>
                {
                  modal ? <BookingModal modal={modal} setModal={setModal} product={prd} /> : ''
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WhiteList