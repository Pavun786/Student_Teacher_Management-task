import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import React from "react";


function StudentView(){

    const params =useParams()

    const [studentData,setStudentData]=useState([])
    console.log(studentData)

    useEffect(()=>{
        loadUser()
   },[])

    let loadUser=async()=>{
        try{
            let student =await axios.get(`https://643504e783a30bc9ad55fbcb.mockapi.io/student/${params.id}`)
           
            setStudentData(student.data)
        } catch (error){

        }
    
     }
     return(
        <>
         <h1>{studentData.student_name}</h1>
        <h1>{studentData.class}</h1>
        <h1>{studentData.subject}</h1>
        <h1>{studentData.mark}</h1>
        <h1>{studentData.Total_student}</h1>
        <h1>{studentData.over_all_percentage}</h1>
        <h1>{studentData.remak}</h1>
        </>
     )
}
export default StudentView;