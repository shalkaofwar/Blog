import React from 'react';
import './Form.css'
import { Link } from "react-router-dom";

export default function Login(props){

return(
    <div style={{minHeight: "53vh", padding:"3%"}}>
<div className='container card p-3 mt-2 register-container' style={{minHeight: "33vh", minWidth: "40vh"}} >
<form onSubmit={props.logging}>
    <div className='form-group'>
<label htmlFor='email'>Email</label>
<input type='email' name='email' className='form-control'/>
</div>
<div className='form-group'>
<div className=" password-section"> 
<label htmlFor='password'>Password</label> 
<input type={props.showPassword ? "text" : "password"} name='password' className='form-control'/>
<span className={props.showPassword ?"fa fa-eye-slash":"fa fa-eye"} id="togglePassword" onClick={props.ShowHide}></span>
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