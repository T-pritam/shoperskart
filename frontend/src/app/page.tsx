"use client"
import NavScrollExample from "./components/Navbar";
import Categories from "./components/categories";
import { useState,useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from 'sonner'
import { useSearchParams } from 'next/navigation';

export default async function Home() {
  const cookies = new Cookies()
  const searchParams = useSearchParams();
  const tokenn = searchParams.get('token')

  return <>
      <NavScrollExample token = {tokenn} />
      <Categories />
  </>
}
