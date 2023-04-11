import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import axios from 'axios'
import React from "react";


function Teacher(){

    const[users,setUsers]=useState([])
    const[isLoading,setLoading]=useState(false)

  //here useEffect is a one of hook concept.and it was used for fetch the data when compoenet is mount,ie.not at all time
      useEffect(()=>{
       
       loadData()
   
    },[])
 
   //axios is a metheod,used for look like fetch the data.ie.advanced fecth concept
  
   let loadData=async()=>{
        setLoading(true)
        let users=await axios.get("https://643504e783a30bc9ad55fbcb.mockapi.io/teacher");
        
        //console.log(users)
        setUsers(users.data)
        setLoading(false)
   }

   let userDelete = async (id)=>{
   
    try{
        let ask= window.confirm("Do you want to delete this data.?"
        );
        if(ask){
            await axios.delete(`https://643504e783a30bc9ad55fbcb.mockapi.io/teacher/${id}`
            );
            loadData();
        }
    }catch (error){

    }
    
   }

    return(
        <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Teachers</h1>
                        <Link to="/portal/createTeacher" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create teacher</Link>
                    </div>
        {
            isLoading ? <span>Loading...</span> : <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Teacher_name</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Total_student</th>
                                <th>Over-all_percentage %</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>S.no</th>
                                <th>Teacher_name</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Total_student</th>
                                <th>Over-all_percentage %</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                       <tbody>
                       {/* usely the map is return a values and its indexes,& here we used for s.no purpose */}
                        
                        {users.map((user,index)=>{
                            
            //here key={index} is given for prevent the virtual dom from confusing.because,if there is no keyvalues,then vdom consider the ele are duplicate..  
                       
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.teachername}</td>
                                <td>{user.class}</td>
                                <td>{user.subject}</td>
                                <td>{user.total_student}</td>
                                <td>{user.over_all_percentage}</td>
                                <td>{user.salary}</td>
                                <td>
                                    <Link to={`/portal/teachers/${user.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                    <Link to={`/portal/teachers/edit/${user.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                    <button onClick={()=>userDelete(user.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
                                </td>
                                
                            </tr>
                        })}
                        
                        
                        </tbody> 
                            
                        
                    </table>
                </div>
            </div>
        </div>

        }
        
    </div>
    )
}
export default Teacher;