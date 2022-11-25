import React from 'react'
import Button from '../../../Components/Button/Button'

function AddProduct() {
  return (
    <div className='mt-8'>
      <form className='max-w-[500px] w-auto mx-auto border px-4 py-7'>
        <h1 className='text-3xl font-bold mb-4'>Add A Product</h1>
        <div className='sm:flex justify-between gap-5'>
          <input type="text" name="" placeholder='Product Name' className='border border-gray-700 h-10 px-2 rounded-md w-full' />
          <input type="number" name="" placeholder='Orignal Price' className='border border-gray-700 h-10 px-2 rounded-md w-full sm:mt-0 mt-5' />
        </div>
        <div className='sm:flex justify-between gap-5'>
          <input type="number" name="" placeholder='Selling Price' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
          <select className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5'>
            <option value="productCondition">Product Condition</option>
            <option value="excellent">Excellent</option>
            <option value="goode">Good</option>
            <option value="fair">Fair</option>
          </select>
        </div>
        <div className='sm:flex justify-between gap-5'>
          <input type="number" name="" placeholder='Phone Number' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
          <input type="text" name="" placeholder='Location' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
        </div>
        <div className='sm:flex justify-between gap-5'>
          <input type="text" name="" placeholder='Product Category' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
          <input type="text" name="" placeholder='Year Of Use' className='border border-gray-700 h-10 px-2 rounded-md w-full mt-5' />
        </div>
        <input type="file" name=""  className=' h-10 px-2 rounded-md  mt-5'/>
        <textarea name="" placeholder='Description' className='border border-gray-700 h-40 w-full py-2 mt-5 px-2 rounded-md'></textarea>
        <Button castomClass={'mt-5'}>Add Product</Button>
      </form>
    </div>
  )
}

export default AddProduct