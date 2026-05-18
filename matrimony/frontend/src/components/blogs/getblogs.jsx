import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getdata } from '../../api/api'

const getblogs=()=> {
  const[data,setdata]=useState([])
  useEffect(()=>{
  const fetchdata=async()=>{
    const res=await getdata()
    setdata (res.data)
    // console.log(res.data);
  }
   fetchdata()
  },[])
  return (
    <div>
        {data.map((i,index)=>(
        <div.key={index}>
        <h1>{}</h1>
        </div>
        ))}
    </div>
  )
  
}

export default getblogs
