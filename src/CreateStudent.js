import axios from "axios";
import {useFormik} from "formik"
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudent(){

    
    let navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            student_name: "",
            class: "",
            subject: "",
            mark: "",
            over_all_percentage: "",
            remark: ""
        },
  
        //it act as intermidiate for showcase the result.
       
        validate :(values)=>{
           let errors={};

           if (values.student_name === "") {
            errors.student_name = "Enter Student Name"
        }

        if (values.class === "") {
            errors.class = "Enter class Name"
        }

        if (values.subject === "") {
            errors.subject = "Enter subject Name"
        }

        if (values.mark === "") {
            errors.mark = "Enter mark "
        }

        if (values.over_all_percentage === "") {
            errors.over_all_percentage = "Enter over_all_percentage "
        }
        if (values.remark === "") {
            errors.remark = "Enter remarks "
        }

           return errors

        },
      //when form is submit(handlesubmit) ,it will triger  
        onSubmit: async(values)=>{
            // this is POST Methoed,used for create a new data & add it
            
            let user= await axios.post("https://643504e783a30bc9ad55fbcb.mockapi.io/student",values)
            navigate("/portal/students")
            alert("Student Created")
        }
    });

    return(
        <>
     
        <div className="container">
           <form onSubmit={formik.handleSubmit}>
            <div className="row">
            <div className="col-lg-6">
                <label>StudentName</label>
                <input 
                    className="form-control" 
                    type={"text"}
                    value={formik.values.student_name}
                    onChange={formik.handleChange}
                    name="student_name">
   {/* this handleChange is a one of formik facility.its used for update the values in formik variable */}
                </input>
                <span style={{color:"red"}}>{formik.errors.student_name}</span>
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
                <label>Mark</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.mark}
                onChange={formik.handleChange}
                name="mark"></input>
            </div>
            <div className="col-lg-6">
                <label>Over All Percentage</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.over_all_percentage}
                onChange={formik.handleChange}
                name="over_all_percentage"></input>
            </div>
            <div className="col-lg-6">
                <label>Remark</label>
                <input 
                className="form-control"
                 type={"text"}
                 value={formik.values.remark}
                 onChange={formik.handleChange}
                 name="remark"></input>
            </div>
          
            <div className="col-lg-6">
         {/* here we change a input tag element into button & we also write a formik logic for disable this button,when user created      */}
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
export default CreateStudent;