
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoCheckmark } from 'react-icons/io5'
import Button from '../../../Components/Button/Button'
import Loader from '../../../Components/Loader/Loader'
import useTitle from '../../../Hooks/useTItle'

function Seller() {

  // const [seller, setSeller] = useState([])
  // const [isLoding, setIsLoding] = useState(true)
  useTitle('All Seller')

  // useEffect(() => {
  //   axios.get(`https://module-78-server.vercel.app/user/seller`)
  //     .then(res => setSeller(res.data))
  //   setIsLoding(false)
  // }, [])

  const { data: seller = [], refetch, isLoading } = useQuery({
    queryKey: ['seller'],
    queryFn: async () => {
      const res = await fetch(`https://module-78-server.vercel.app/user/seller`)
      const data = await res.json()
      return data
    },
  })

  const hendleDeleteSeller = (id) => {
    axios.delete(`https://module-78-server.vercel.app/user/seller/${id}`)
      .then(res => console.log(res))
    // const newSeller = seller.filter(slr => slr._id !== id)
    // setSeller(newSeller)
    refetch()
  }

  const hendleVerified = (email) => {
    fetch(`https://module-78-server.vercel.app/user/seller?email=${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      // body: JSON.stringify({ verifiedStatud: 'verifide' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        refetch()
      })
  }

  console.log(seller)
  return (
    <div className='mt-8'>
      {/* -----------Heading------------ */}
      <h1 className='text-4xl font-bold'>All Seller</h1>
      {/* -----------div------------ */}
      {
        isLoading ? <Loader /> :

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
                  seller?.length === 0 ?
                    // ------------condaition for loading no item
                    <div><div className='text-2xl text-yellow-600 '> "No item"</div></div> :
                    seller?.map((slr, index) => {
                      const { _id, name, email, verifiedStatud } = slr
                      // --------- Review Items
                      return (
                        <div key={index} className="grid  sm:grid-cols-[15%_25%_25%_15%_15%] break-words ">
                          <div className="px-3 py-2 flex items-center">
                            <p className='sm:hidden font-semibold text-base'>No: </p>
                            <p className='sm:ml-0 ml-3'>{index + 1}</p>
                          </div>

                          <div className="px-3 py-2 flex items-center">
                            <p className='sm:hidden font-semibold text-base'>Name: </p>
                            <p className='sm:ml-0 ml-3 flex items-center'>{name} {verifiedStatud === "verifide" ? <IoCheckmark className='text-green-500 text-2xl'/> : ''}</p>
                          </div>
                          <div className="px-3 py-2 flex items-center">
                            <p className='sm:hidden font-semibold text-base'>Email: </p>
                            <p className='sm:ml-0 ml-3'>{email}</p>
                          </div>
                          <div className="px-3 py-2 flex items-center">
                            <p className='sm:hidden font-semibold text-base'>Verified: </p>
                            {verifiedStatud === "verifide" ? '' :
                             <Button hendleClick={() => hendleVerified(email)} castomClass={'py-1 sm:ml-0 ml-3'}>Verified</Button>}
                           
                            {/* <p className='sm:ml-0 ml-3'>{verified === 'verified' ? 'verified' : 'unverified'}</p> */}
                          </div>

                          <div className="px-3 py-2 flex items-center">
                            <p className='sm:hidden font-semibold text-base'>Delete: </p>
                            <Button hendleClick={() => hendleDeleteSeller(_id)} castomClass={'py-1 sm:ml-0 ml-3'}>Delete</Button>
                          </div>
                        </div>
                      )
                    })
                }
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Seller