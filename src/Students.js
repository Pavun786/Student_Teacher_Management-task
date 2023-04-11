import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


function Students(){

   const[students,setStudents]=useState([])
   const[isLoading,setLoading]=useState(false)

   useEffect(()=>{
     loadData()
   },[])

   let loadData=async()=>{
       
       setLoading(true) 
       let student=await axios.get("https://643504e783a30bc9ad55fbcb.mockapi.io/student")
       
       setStudents(student.data)
       setLoading(false)
   }

   let studentDelete = async (id) =>{
   
     try{
         let ask= window.confirm("Do you want to delete this data.?"
         );
         if(ask){
             await axios.delete(`https://643504e783a30bc9ad55fbcb.mockapi.io/student/${id}`);
             loadData();
         }
     }catch (error){
 
     }
     
    }
   
    return(

        <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Students</h1>
                        <Link to="/portal/createStudent" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create Student</Link>
        </div>
       { 
       isLoading ?<span>Loading...</span>: <div class="card shadow mb-4">
       <div class="card-header py-3">
           <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
       </div>
       <div class="card-body">
           <div class="table-responsive">
               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
                       <tr>
                         <th>S.no</th>
                        <th>Student_name</th>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Mark</th>
                        <th>Total-Student</th>
                        <th>Over-all_percentage %</th>
                        <th>remark</th>
                        <th>Action</th> 
                           
                       </tr>
                   </thead>
                   <tfoot>
                       <tr>
                           
                       <th>S.no</th>
                       <th>Student_name</th>
                       <th>Class</th>
                       <th>Subject</th>
                       <th>Mark</th>
                       <th>Total-Student</th>
                       <th>Over-all_percentage %</th>
                       <th>remark</th>
                       <th>Action</th>
                       </tr>
                   </tfoot>
                  <tbody>
                  
                   
                 
                   {students.map((list,index)=>{
                       return <tr key={index}>

                      <td>{index + 1}</td>
                      <td>{list.student_name}</td>
                      <td>{list.class}</td>
                      <td>{list.subject}</td>
                      <td>{list.mark}</td>
                      <td>{list.Total_student}</td>
                      <td>{list.over_all_percentage}</td>
                      <td>{list.remark}</td>
                           <td>
                                    <Link to={`/portal/students/${list.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                    <Link to={`/portal/students/edit/${list.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                    <button onClick={()=>studentDelete(list.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
                                </td>
                       </tr>
                   })}
                   </tbody> 
                       
                   
               </table>
           </div>
       </div>
   </div>}
        
        
        </div>


    )
}
export default Students;