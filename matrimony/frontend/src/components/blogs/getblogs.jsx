import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { deletepost, getdata } from '../../api/api'

const Getblogs=()=> {
  const[data,setdata]=useState([])
  useEffect(()=>{
  const fetchdata=async()=>{
    
  const res=await getdata(data);
  setdata (res.data);
  console.log(res);
  

}
   fetchdata()
  },[]);
  const handledelete=async(id)=>{
     const confirmDelete = window.confirm("Are You Sure...?")
      if (!confirmDelete) return;
    try {
      const res = await deletepost(id);
      if(res.success){
        setdata(data.filter((post)=>post._id!==id));
        alert("Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
        {
        data.map((e,index)=>(

        <div key={index}>
        <h1>{e.name}</h1>
        <p>{e.email}</p>
        <p>{e.password}</p>
        <p>{e.age}</p>
        <p>{e.gender}</p>
        <p>{e.religion}</p>
        <p>{e.caste}</p> 
        <p>{e.education}</p>
        <p>{e.salary}</p>
        <p>{e.location}</p>
        <p>{e.about}</p>
        <button onClick={()=>handledelete(e._id)}>Delete</button> 
        </div>
        
        ))}
        
    </>
  )
  
}

export default Getblogs
