import Calander from '@/components/Calander'
import Navbar from '@/components/Navbar'
import { NewLog } from '@/components/NewLog'
import { Logs } from '@/components/Logs'
import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import InitLog from './auth/components/state/InitLog'
import { ILog } from '@/store'

export const dynamic = "force-dynamic";

const page = async () => {
  // getting user session

  const supabase = createServerComponentClient({cookies})

  const { data } = await supabase.auth.getSession();

  // console.log(data)
  // console.log(data.session?.user);
  if(!data.session){
    return redirect("/auth")
  }

  const { data: logs, error } = await supabase.from("logs").select("*").order("date", {
    ascending: true
  });

  console.log(logs);

  return (
    <div className="p-5 space-y-10">
      <InitLog logs={logs as ILog[]}/>
      <Navbar />
      <NewLog /> 
      <Calander />
      <Logs />
    </div>
  )
}

export default page