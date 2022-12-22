import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../../../Components/Button/Button'
import { AuthContext } from '../../../Context/AuthProvider'

function MyProduct() {

  const { user } = useContext(AuthContext)
  const [products, setProduct] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/myProduct?email=${user?.email}`)
      .then(res => setProduct(res.data))
  }, [user?.email])

  const hendleAds = (id) => {
    fetch(`http://localhost:5000/addProducts/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ ads: 'advertised' })
    })
  }

  const hendleDelete = (id) => {
    axios.delete(`http://localhost:5000/myProduct/${id}`)
      .then(res => console.log(res))
    const newProduct = products.filter(prd => prd._id !== id)
    setProduct(newProduct)
  }



  return (
    <div className='mt-8'>
      <div className="">
        {/* -----------Heading------------ */}
        <h1 className='text-4xl font-bold'>My Product</h1>
        {/* -----------div------------ */}
        <div className=" mt-7">
          <div className="w-full text-xs text-left ">
            <div>
              <div className="bg-gray-300 hidden  lg:grid grid-cols-[20%_10%_15%_20%_15%_20%]">
                <div className="p-3">Product Name</div>
                <div className="p-3">Price</div>
                <div className="p-3">Date</div>
                <div className="p-3">Email</div>
                <div className="p-3">Phone</div>
                <div className="p-3">Acction</div>
              </div>
            </div>
            <div className="border-b  border-gray-700 ">
              {
                products.length === 0 ?
                  // ------------condaition for loading no item
                  <div><div className='text-2xl text-yellow-600'> "No item"</div></div> :
                  products.map(product => {
                    // --------- Review Items
                    const { _id, date, userEmail, phoneNumber, sellarPrice, name,  } = product
                    return (
                      <div key={_id} className="grid lg:grid-cols-[20%_10%_15%_20%_15%_20%] md:grid-cols-[1fr_1fr_1fr] break-words">
                        <div className="px-3 py-2">
                          <p className='lg:hidden font-semibold text-base'>Product Name: </p>
                          <p>{name}</p>
                        </div>
                        <div className="px-3 py-2">
                          <p className='lg:hidden font-semibold text-base'>Price: </p>
                          <p>{sellarPrice}</p>
                        </div>
                        <div className="px-3 py-2">
                          <p className='lg:hidden font-semibold text-base'>Buyer Name: </p>
                          <p>{date}</p>
                        </div>
                        <div className="px-3 py-2">
                          <p className='lg:hidden font-semibold text-base'>Email: </p>
                          <p>{userEmail}</p>
                        </div>
                        <div className="px-3 py-2">
                          <p className='lg:hidden font-semibold text-base'>Phone: </p>
                          <p>{phoneNumber}</p>
                        </div>
                        <div className="px-3 py-2 ">
                          <p className='lg:hidden font-semibold text-base'>Action: </p>
                          <div className='flex gap-5 items-center flex-wrap'>
                            <Button hendleClick={() => hendleAds(_id)}>Advirtis</Button>
                            <Button hendleClick={() => hendleDelete(_id)}>Delet</Button>
                          </div>
                        </div>
                      </div>
                    )
                  })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProduct