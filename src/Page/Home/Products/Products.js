import { useQuery } from '@tanstack/react-query'
import Button from '../../../Components/Button/Button'
import Card from '../../../Components/Card/Card'

function Products() {

  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/newistProduct')
      const data = await res.json()
      return data
    }
  })




  return (
    <div className='max-w-[1400px] mx-auto mt-28 px-2'>
      <h3 className='text-3xl font-bold'>Newist<span className='text-[#3ECBC4]'> Product</span></h3>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7'>
        {
          products.map(product => <Card key={product._id} product={product} />)
        }
      </div>
    </div>
  )
}

export default Products