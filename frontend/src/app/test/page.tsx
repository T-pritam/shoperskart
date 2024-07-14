"use client"

import { useState,useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from 'sonner'
import { useSearchParams } from 'next/navigation';

export default async function Home() {
  const cookies = new Cookies()
  const searchParams = useSearchParams();
  useEffect(() => {
    
    async function getUser(){
      const a = await axios.get("http://localhost:8000/user/get/all/"+token)
      console.log(a.data)
      cookies.set("access_token",a.data.token)
      cookies.set("name",a.data.secureInfo.name)
      cookies.set("profileImage",a.data.secureInfo.profileImage)
    }
    const token = searchParams.get('token')
    if(token){
      getUser()
    }
    
  },[searchParams])
  return <>
      <div>
        <h1>Data</h1>
        <h3></h3>
        <h3></h3>
        <h3></h3>
      </div>
  </>
}
