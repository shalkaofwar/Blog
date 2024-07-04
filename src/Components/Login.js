import React from 'react';
import './Form.css'
import { Link } from "react-router-dom";

export default function Login(props){

return(
    <div style={{minHeight: "53vh"}}>
<div className='container card p-3 mt-2 register-container' style={{minHeight: "33vh"}} >
<form onSubmit={props.logging}>
    <div className='form-group'>
<label htmlFor='email'>Email</label>
<input type='email' name='email' className='form-control'/>
</div>
<div className='form-group'>
<label htmlFor='password'>Password</label> 
<div className='wrapper'>
<input type={props.showPassword ? "text" : "password"} style={{ paddingRight:"2%", float:"left"}} name='password' className='form-control'/>
<img src={props.showPassword ? (require("./eyeslash.png")) : (require("./eye.png")) }  onClick={props.ShowHide} id="eye" alt="description of" style={{ width:"16px", height:"12px", position:'absolute', marginLeft:"-4%", marginTop:"3%"}}></img>
</div>
</div>
<div className='form-group'>
<i style={{color:"red"}}>{props.lmessage}</i></div>
<div className='form-group'>
<button type='submit' className='btn btn-primary' style={{margin: "2vh"}}>Login</button>
<Link to="/Register"><button type='submit' className='btn btn-primary' style={{margin: "2vh", display: "inline-block"}}> New User, Register Now </button></Link>
</div>

</form>
</div>
</div>
)

}