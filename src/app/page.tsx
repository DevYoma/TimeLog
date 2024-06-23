import Calander from '@/components/Calander'
import Navbar from '@/components/Navbar'
import { NewLog } from '@/components/NewLog'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className="p-5 space-y-10">
      <Navbar />
      <NewLog /> 
      <Calander />
    </div>
  )
}

export default page