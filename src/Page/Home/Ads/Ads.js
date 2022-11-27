import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Ads() {

    const [prodcuts, setProducts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/adsProduct`)
            .then(res => setProducts(res.data))
    }, [])
    console.log(prodcuts)
    return (
        <div>
            <h1>Ads</h1>
        </div>
    )
}

export default Ads