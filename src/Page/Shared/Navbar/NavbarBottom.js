import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavbarBottom.css'

function NavbarBottom() {
    const { data: categorys = [] } = useQuery({
        queryKey: ['categorys'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/categorys')
          const data = await res.json()
          return data
        }
      })

    return (
        <div className='flex justify-between items-center mt-3  max-w-[1400px] mx-auto'>
            <div className='categoty'>
                <h3 className='underline '>All Category</h3>
                <div className='category_menu'>
                    {
                        categorys.map(category => <Link className='block capitalize leading-6 py-2 px-2' to={`/products/${category.cata_id}`} key={category._id}>{category.name}</Link>)
                    }
                    
                </div>
            </div>
            <div className='space-x-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/Block'>Block</NavLink>
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </div>
        </div>

    )
}

export default NavbarBottom