"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { cookies } from "next/headers";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthComponent = () => {
  const supabase = createClientComponentClient();

  const handleLogin = async () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="p-5">
      <Navbar />
      <div className="flex justify-center items-center h-80vh">
        <div className="text-center space-y-5">
          <p>
            Remember, time is your most valuable asset <br />
            invest it wisely with our Time Log App!
          </p>
          <Button onClick={handleLogin}>Login with github</Button>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;