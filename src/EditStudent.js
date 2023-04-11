import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function EditStudent() {
const params = useParams()
const navigate = useNavigate()
   const formik = useFormik({
        initialValues: {
          student_name:"",
          class: "",
          subject: "",
          Total_student: "",
          over_all_percentage: "",
          remark: ""
        },
        validate: (values) => {
           let errors = {};

           if (values.student_name === "") {
            errors.student_name = "Please Enter Teacher Name"
        }

        if (values.class === "") {
            errors.class = "Please Enter Class Name"
        }

        if (values.subject === "") {
            errors.subject = "Please Enter Subject Name"
        }

        if (values.Total_student === "") {
            errors.Total_student = "Please Enter total_student"
        }

        if (values.over_all_percentage === "") {
            errors.over_all_percentage = "Please Enter Percentage"
        }

        if (values.remark === "") {
            errors.remark = "Please Enter Salary"
        }


            return errors;

        },
        onSubmit: async (values) => {
         await axios.put(`https://643504e783a30bc9ad55fbcb.mockapi.io/student/${params.id}`, values)
        navigate("/portal/students/")
        }
    });

    useEffect (() => {
        loadUser()
    }, [])

    let loadUser = async () => {
        try{
            let student = await axios.get(`https://643504e783a30bc9ad55fbcb.mockapi.io/student/${params.id}`)
        formik.setValues({
            student_name: student.data.student_name,
            class: student.data.class,
            subject:student.data.subject,
            Total_student:student.data.Total_student,
            over_all_percentage:student.data. over_all_percentage,
            remark:student.data.remark
        });
        }catch(error){
            
        }
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">

                        <div className="col-lg-6">
                            <label>StudentName</label>
                            <input className={`form-control ${formik.errors.student_name ? `input-error` : ``}`} 
                                type={"text"} 
                                value={formik.values.student_name} 
                                onChange={formik.handleChange} 
                                name="student_name" >

                            </input>

                            <span style={{ color: "red" }}>{formik.errors.student_name}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Class</label>
                            <input className={`form-control ${formik.errors.class ? `input-error` : ``}`} 
                            type={"text"} 
                            value={formik.values.class} 
                            onChange={formik.handleChange} 
                            name="class"></input>

                            <span style={{ color: "red" }}>{formik.errors.class}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Subject</label>
                            <input className={`form-control ${formik.errors.subject ? `input-error` : ``}`}
                             type={"text"} 
                             value={formik.values.subject} 
                             onChange={formik.handleChange} 
                             name="subject"></input>
                            <span style={{ color: "red" }}>{formik.errors.subject}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Total Students</label>
                            <input className={`form-control ${formik.errors.Total_student ? `input-error` : ``}`}
                             type={"text"} 
                             value={formik.values.Total_student} 
                             onChange={formik.handleChange} 
                             name="Total_student"></input>
                            <span style={{ color: "red" }}>{formik.errors.Total_student}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Over all percentage</label>
                            <input className={`form-control ${formik.errors.over_all_percentage ? `input-error` : ``}`} 
                            type={"text"} 
                            value={formik.values.over_all_percentage} 
                            onChange={formik.handleChange} 
                            name="over_all_percentage"></input>
                            <span style={{ color: "red" }}>{formik.errors.over_all_percentage}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Remark</label>
                            <input className={`form-control ${formik.errors.remark ? `input-error` : ``}`} 
                            type={"text"} 
                            value={formik.values.remark} 
                            onChange={formik.handleChange} 
                            name="remark"></input>

                            <span style={{ color: "red" }}>{formik.errors.remark}</span>
                        </div>

                        <div className="col-lg-6">
                            <input className='btn btn-primary'
                                type={"submit"}
                                value="Submit" disabled={!formik.isValid} >
                            </input>
                        </div>

                        <div>

                        </div>

                    </div>
                </form>
            </div>
        </>
    );
}

export default EditStudent