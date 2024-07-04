import React from "react";
import './Header.css';
export default function header(props){
    var myStyle;
    if(props.image==="./About.png"){
    myStyle = {backgroundImage: `url(${require("./About.jpg")})`, backgroundSize: "100%", minHeight: "100%"};}
    else if(props.image==="./Background.png"){
    myStyle = {backgroundImage: `url(${require("./Background.png")})`, backgroundSize: "100%", minHeight: "100%"};}
    else if(props.image==="./Error.jpg"){
        myStyle = {backgroundImage: `url(${require("./Error.png")})`, backgroundSize: "100%", minHeight: "100%"};}
    
    return(
        <header className="masthead" style={myStyle} >
           
        <div className="container position-relative px-4 px-lg-5">
            <div className="row justify-content-center" style={{display: "block", marginBottom: "0.5rem", marginTop: "10%"}}>
                <div className="App">

                        <h1>{props.title}</h1>
   
                        <span className="subheading">{props.subtitle}</span>

                </div>
            </div>
        </div>
    </header>
    
    )

}