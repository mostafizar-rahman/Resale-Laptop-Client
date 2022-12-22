import { useQuery } from '@tanstack/react-query'
import Card from '../../../Components/Card/Card'
import Loader from '../../../Components/Loader/Loader'

function Products() {

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/newistProduct')
      const data = await res.json()
      return data
    }
  })


  return (
    <div className='max-w-[1400px] mx-auto mt-28 px-2 '>
      {
        isLoading ? <Loader /> :
          <div>
            <h3 className='text-3xl font-bold'>Newist<span className='text-[#3ECBC4]'> Product</span></h3>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7'>
              {
                products.map((product, i) => <Card key={i} product={product} />)
              }
            </div>
          </div>
      }


    </div>
  )
}

export default Products