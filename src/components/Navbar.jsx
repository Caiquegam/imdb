import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-blue-100 lg:tex-lg p-4'>
      <NavbarItem title="Tendência" param="fetchTrending" />
      <NavbarItem title="Mais votados" param="fetchTopRated" />
    </div>
  )
}
