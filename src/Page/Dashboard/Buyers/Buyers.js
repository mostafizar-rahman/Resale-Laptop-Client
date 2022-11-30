import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../../Components/Button/Button'

function Buyers() {

  const [buyer, setBuyer] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/user/buyer`)
      .then(res => setBuyer(res.data))
  }, [])

  const hendleDeleteBuyer = (id) => {
    axios.delete(`http://localhost:5000/user/buyer/${id}`)
      .then(res => console.log(res))
    const newBuyer = buyer.filter(byr => byr._id !== id)
    setBuyer(newBuyer)
  }
  return (
    <div className='mt-8'>
      {/* -----------Heading------------ */}
      <h1 className='text-4xl font-bold'>All Buyer</h1>
      {/* -----------div------------ */}
      <div className=" mt-7">
        <div className="w-full text-xs text-left ">
          <div>
            <div className="bg-gray-300 hidden  sm:grid sm:grid-cols-[15%_25%_25%_15%_15%]">
              <div className="p-3">No</div>
              <div className="p-3">Name</div>
              <div className="p-3">Email</div>
              <div className="p-3">Verified</div>
              <div className="p-3">Delete</div>
            </div>
          </div>
          <div className='border-b border-b-gray-300'>
            {
              buyer?.length === 0 ?
                // ------------condaition for loading no item
                <div><div className='text-2xl text-yellow-600 '> "No item"</div></div> :
                buyer?.map((byr, index) => {
                  const { _id, name, email, verified } = byr
                  // --------- Review Items
                  return (
                    <div key={index} className="grid  sm:grid-cols-[15%_25%_25%_15%_15%] break-words ">
                      <div className="px-3 py-2 flex items-center">
                        <p className='sm:hidden font-semibold text-base'>No: </p>
                        <p className='sm:ml-0 ml-3'>{index + 1}</p>
                      </div>

                      <div className="px-3 py-2 flex items-center">
                        <p className='sm:hidden font-semibold text-base'>Name: </p>
                        <p className='sm:ml-0 ml-3'>{name}</p>
                      </div>
                      <div className="px-3 py-2 flex items-center">
                        <p className='sm:hidden font-semibold text-base'>Email: </p>
                        <p className='sm:ml-0 ml-3'>{email}</p>
                      </div>
                      <div className="px-3 py-2 flex items-center">
                        <p className='sm:hidden font-semibold text-base'>Verified: </p>
                        <p className='sm:ml-0 ml-3'>{verified === 'verified' ? 'verified' : 'unverified'}</p>
                      </div>
                      <div className="px-3 py-2 flex items-center">
                        <p className='sm:hidden font-semibold text-base'>Delete: </p>
                        <Button hendleClick={() => hendleDeleteBuyer(_id)} castomClass={'py-1 sm:ml-0 ml-3'}>Delete</Button>
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

export default Buyers