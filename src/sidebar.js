import { Link } from "react-router-dom";
import UserContext from "./Context"
import {useContext} from "react";
import React from "react";

function SideBar(){
 
    return(
        <ul className="navbar-nav bg-danger sidebar sidebar-dark accordion" id="accordionSidebar">

       
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">School Admin 
             
                </div>
            </a>

          
            <hr className="sidebar-divider my-0"/>

            
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard"> 
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/teachers">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Teachers</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/students">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Students</span></Link>
            </li>

           

        </ul>
    )
}
export default SideBar;