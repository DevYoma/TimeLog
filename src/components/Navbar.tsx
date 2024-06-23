import React from 'react'
import { Button } from './ui/button'
import { IoTimer } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className="flex">
            <IoTimer className='text-2xl'/>
            <h1>TimeLog</h1>
        </div>
        <Button>Logout</Button>
    </div>
  )
}

export default Navbar