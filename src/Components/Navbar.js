import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import  './Navbar.css';
import { Link } from "react-router-dom";
export default function navbar(props){
return(
    <div id="Navigate" style={{color:"black",}}>
<nav className="navbar navbar-expand-lg navbar-dark navbar-brand navbar-light" style={{padding:"2px", color:"red"}} id="mainNav">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Having fun</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu</button>
                <div className="collapse navbar-collapse navbar-light " id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-1 py-lg-1">
                        <li className="nav-item"><Link className="nav-link px-lg-3 px-sm-1 py-2 py-lg-1" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 px-sm-1 py-2 py-lg-1" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 px-sm-1 py-2 py-lg-1" to="/post">Error</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 px-sm-1 py-2 py-lg-1" onClick={props.status ? props.logout : ""} to={props.status ? "#" :"/login"}>{props.status ? "Logout":"Login"}</Link></li>
                    </ul>
                </div>
                
            </div>
        </nav>
        </div>
)



}