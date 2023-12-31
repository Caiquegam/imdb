import React from 'react'
import MenuItem from './MenuItem'
import { AiTwotoneHome } from 'react-icons/ai'
import { BsInfoSquareFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiTwotoneHome} />
        <MenuItem title="SOBRE" address="/about" Icon={BsInfoSquareFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch/>
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-blue-500 py-1 px-2 rounded-lg text-white mr-1">
              Gama Movies
            </span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
