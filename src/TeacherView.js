import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import React from "react";


function TeacherView(){
  //useParams is a one of hook concept in react-router-dom
    const params =useParams()
     console.log(params)
    
    //  const [searchParams,setSearchParams]=useSearchParams()
    //  console.log(...searchParams)
   
     const [userData,setUserData]=useState([])
     
     useEffect(()=>{
      
        loadUser()
     
    },[])

     let loadUser=async()=>{
        try{
            let user =await axios.get(`https://643504e783a30bc9ad55fbcb.mockapi.io/teacher/${params.pavun}`)
            console.log(user.data)
            setUserData(user.data)
        } catch (error){

        }
    
     }
    return(
        <>
       
        <h1>{userData.teachername}</h1>
        <h1>{userData.class}</h1>
        <h1>{userData.subject}</h1>
        <h1>{userData.total_student}</h1>
        <h1>{userData.over_all_percentage}</h1>
        <h1>{userData.salary}</h1>
    </>)
}
export default TeacherView;