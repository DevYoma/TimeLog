import React from 'react'
import AuthComponent from './components/AuthComponent'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from "next/headers";

const page = async () => {
    const supabase = createServerComponentClient({cookies})

    const { data } = await supabase.auth.getSession();

    console.log(data)
    // console.log(data.session?.user);
    if(data.session){
        return redirect("/auth")
    }

  return (
    <AuthComponent />
  )
}

export default page