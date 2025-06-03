import React from 'react'
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex items-center justify-center gap-6 whitespace-nowrap dark:bg-amber-600 text-white p-4 shadow-md '>
        <NavbarItem title='Tendances' param='fetchTendances' />
        <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}
