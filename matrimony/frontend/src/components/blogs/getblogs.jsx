import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getdata } from '../../api/api'

const Getblogs=()=> {
  const[data,setdata]=useState([])
  useEffect(()=>{
  const fetchdata=async()=>{
    
  const res=await getdata()
  setdata (res.data)

}
   fetchdata()
  },[])
  return (
    <>
        {
        data.map((i,index)=>(

        <div key={index}>
        <h1>{i.name}</h1>
        <p>{i.email}</p>
        <p>{i.password}</p>
        <p>{i.age}</p>
        <p>{i.gender}</p>
        <p>{i.religion}</p>
        <p>{i.caste}</p> 
        <p>{i.education}</p>
        <p>{i.salary}</p>
        <p>{i.location}</p>
        <p>{i.about}</p> 
        </div>
        
        ))}
        
    </>
  )
  
}

export default Getblogs
