import axios from "axios";
import {useFormik} from "formik"
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditTeacher(){

    const params = useParams()

    let navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            teachername: "",
            class: "",
            subject: "",
            total_student: "",
            over_all_percentage: "",
            salary: ""
        },
  
        //it act as intermidiate for showcase the result.
       
        validate :(values)=>{
           let errors={};

           if (values.teachername === "") {
            errors.teachername = "Please Enter Teacher Name"
        }

        if (values.class === "") {
            errors.class = "Please Enter Class Name"
        }

        if (values.subject === "") {
            errors.subject = "Please Enter Subject Name"
        }

        if (values.total_student === "") {
            errors.total_student = "Please Enter total_student"
        }

        if (values.over_all_percentage === "") {
            errors.over_all_percentage = "Please Enter Percentage"
        }

        if (values.salary === "") {
            errors.salary = "Please Enter Salary"
        }

           return errors

        },
      //when form is submit(handlesubmit) ,it will triger  
        onSubmit:async(values)=>{
           
            
            //this put method used for edited values are again updated.
           
            await axios.put(`https://643504e783a30bc9ad55fbcb.mockapi.io/teacher/${params.id}`,values)
            navigate("/portal/teachers")
        }
    });

      useEffect(()=>{
       loadUser()
      },[])

      let loadUser = async()=>{
        try{
           let user = await axios.get(`https://643504e783a30bc9ad55fbcb.mockapi.io/teacher/${params.id}`)
          
   // setValues is method use for set the values in object.the values we get from mock API    
           formik.setValues({
            teachername: user.data.teachername,
            class: user.data.class,
            subject: user.data.subject,
            total_student: user.data.total_student,
            over_all_percentage: user.data. over_all_percentage,
            salary: user.data.salary
        })
        
        } catch (error){

        }
      }


    return(
        <>
     
        <div className="container">
           <form onSubmit={formik.handleSubmit}>
            <div className="row">
            <div className="col-lg-6">
                <label>Teachername</label>
                <input 
                    className="form-control" 
                    type={"text"}
                    value={formik.values.teachername}
                    onChange={formik.handleChange}
                    name="teachername">
   {/* this handleChange is a one of formik facility.its used for update the values in formik variable */}
                </input>
                <span style={{color:"red"}}>{formik.errors.teachername}</span>
            </div>
            <div className="col-lg-6">
                <label>Class</label>
                <input 
                className={`form-control ${formik.errors.class ? `input-error` : ``}`} 
                type={"text"}
                value={formik.values.class}
                onChange={formik.handleChange}
                name="class"
                ></input>
                 <span style={{color:"red"}}>{formik.errors.class}</span>
            </div>
            <div className="col-lg-6">
                <label>Subject</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.subject}
                onChange={formik.handleChange}
                name="subject"></input>
            </div>
              
            <div className="col-lg-6">
                <label>total_student</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.total_student}
                onChange={formik.handleChange}
                name="total_student"></input>
            </div>
            <div className="col-lg-6">
                <label>over_all_percentage</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.over_all_percentage}
                onChange={formik.handleChange}
                name="over_all_percentage"></input>
            </div>
            <div className="col-lg-6">
                <label>Salary</label>
                <input 
                className="form-control"
                 type={"text"}
                 value={formik.values.salary}
                 onChange={formik.handleChange}
                 name="salary"></input>
            </div>
            <div className="col-lg-6">
               
                <input 
                className="btn-primary" 
                type={"submit"} 
                value="submit"
                disabled={!formik.isValid}></input>
            </div>
            </div>
            </form>
        </div>
       
       
       
       </>
    )
}
export default EditTeacher;