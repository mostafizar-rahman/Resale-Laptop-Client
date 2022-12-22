import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Button from '../../../Components/Button/Button'
import { AuthContext } from '../../../Context/AuthProvider'

function AddProduct() {

  const { user } = useContext(AuthContext)
  const [verifiedStatud, setverifiedStatud] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:5000/user?email=${user?.email}`)
      .then(res => setverifiedStatud(res.data.verifiedStatud))
  }, [user?.email])



  const hendleAddProductSubmit = (event) => {
    event.preventDefault()

    const form = event.target;
    const name = form.name.value;
    const orignalPrice = form.orignalPrice.value;
    const sellarPrice = form.sellarPrice.value;
    const condtion = form.condtion.value;
    const phoneNumber = form.phoneNumber.value;
    const location = form.location.value;
    const category = form.category.value.toLowerCase();
    const yearOfUse = form.yearOfUse.value;
    const image = form.image.files[0]
    const discription = form.discription.value;
    const date = new Date().toLocaleDateString()

    const formData = new FormData()
    formData.append('image', image)
    fetch('https://api.imgbb.com/1/upload?key=180bb6c71ccd16216e052d292aa3d41b', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        const productInfo = {
          name,
          orignalPrice,
          sellarPrice,
          condtion,
          phoneNumber,
          location,
          category,
          yearOfUse,
          discription,
          date,
          image: data.data.url,
          cata_id: category,
          userName: user.displayName,
          userEmail: user.email,
          verifiedStatud
        }

        fetch('http://localhost:5000/addProducts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(productInfo)
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              toast.success('Added Success Full')
              form.reset()
            }
          })

        fetch('http://localhost:5000/addNewistProduct', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(productInfo)
        })
          .then(res => res.json())
          .then(data => { })

        // Added category
        fetch('http://localhost:5000/categorys', {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ cata_id: category, name: category })
        })
          .then(res => res.json())
          .then(data => console.log(data))
      })

  }

  return (
    <div className='mt-8'>
      <form onSubmit={hendleAddProductSubmit} className='max-w-[500px] w-auto mx-auto border px-4 py-7'>
        <h1 className='text-3xl font-bold mb-4'>Add A Product</h1>
        <div className='sm:flex justify-between gap-5'>
          <input type="text" name="name" placeholder='Product Name' className='border border-gray-700 h-10 px-2 rounded-md w-full' />
          <input type="number" name="orignalPrice" placeholder='Orignal Price' className='border border-gray-700 h-10 px-2 rounded-md w-full sm:mt-0 mt-5' />
        </div>
        <div className='sm:flex justify-between gap-5'>
          <input type="number" name="sellarPrice" placeholder='Selling Price' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
          <select name='condtion' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5'>
            <option value="productCondition">Product Condition</option>
            <option value="excellent">Excellent</option>
            <option value="goode">Good</option>
            <option value="fair">Fair</option>
          </select>
        </div>
        <div className='sm:flex justify-between gap-5'>
          <input type="number" name="phoneNumber" placeholder='Phone Number' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
          <input type="text" name="location" placeholder='Location' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
        </div>
        <div className='sm:flex justify-between gap-5'>
          <input type="text" name="category" placeholder='Product Category' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
          <input type="text" name="yearOfUse" placeholder='Year Of Use' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
        </div>
        <input type="file" name="image" className=' h-10 px-2 rounded-md  mt-5' />
        <textarea name="discription" placeholder='Description' className='border border-gray-700 h-40 w-full py-2 mt-5 px-2 rounded-md'></textarea>
        <Button castomClass={'mt-5'}>Add Product</Button>
      </form>
    </div>
  )
}

export default AddProduct