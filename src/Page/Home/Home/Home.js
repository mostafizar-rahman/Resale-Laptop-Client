import React from 'react'
import useTitle from '../../../Hooks/useTItle'
import About from '../About/About'
import Ads from '../Ads/Ads'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'

function Home() {
  useTitle('Home')
  return (
    <div>
        <Banner/>
        <Ads/>
        <About/>
        <Products/>
    </div>
  )
}

export default Home