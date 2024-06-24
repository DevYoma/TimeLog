import Calander from '@/components/Calander'
import Navbar from '@/components/Navbar'
import { NewLog } from '@/components/NewLog'
import { Logs } from '@/components/Logs'
import React from 'react'

const page = () => {
  return (
    <div className="p-5 space-y-10">
      <Navbar />
      <NewLog /> 
      <Calander />
      <Logs />
    </div>
  )
}

export default page