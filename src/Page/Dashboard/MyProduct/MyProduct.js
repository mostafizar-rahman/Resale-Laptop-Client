import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'

function MyProduct() {

  const { user } = useContext(AuthContext)
  const [products, setProduct] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/myProduct?email=${user?.email}`)
      .then(res => setProduct(res.data))
  }, [user?.email])
  console.log(products)

  return (
    <div>
      <h1>My Product</h1>
    </div>
  )
}

export default MyProduct