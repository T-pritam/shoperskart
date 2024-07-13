"use client"
import NavScrollExample from "./components/Navbar";
import Categories from "./components/categories";
import { useState,useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from 'sonner'

export default async function Home() {
  const cookies = new Cookies()
  useEffect(() => {
    if(cookies.get('login') == true){
      toast.success("Logged in Successfully",{
        duration : 1000
      })
      cookies.remove('login')
    }
  },[])
  return <>
      <NavScrollExample />
      <Categories />
  </>
}
