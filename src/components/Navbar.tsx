"use client"

import React from 'react'
import { Button } from './ui/button'
import { IoTimer } from 'react-icons/io5'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  }

  const isAuthenticated = pathname === "/auth";

  return (
    <div className='flex items-center justify-between'>
        <div className="flex">
            <IoTimer className='text-2xl'/>
            <h1>TimeLog</h1>
        </div>
        {!isAuthenticated && (<Button onClick={handleLogout}>Logout</Button>)}
    </div>
  )
}

export default Navbar