import React from 'react';
import './Form.css'

export default function Register(props){
return(
    <div style={{minHeight: "53vh"}}>
<div className='container card p-3 mt-2 register-container' style={{minHeight: "33vh"}} >
<form onSubmit={props.submit}>
<div className='form-group'>
<label htmlFor='name'>Name</label>
<input type='text' name='name' required className='form-control'/>
</div>
    <div className='form-group'>
<label htmlFor='email'>Email</label>
<input type='email' name='email' required className='form-control'/>
</div>
{/* Password item */}
<div className='form-group'>
<label htmlFor='password'>Password</label> 
<div className='wrapper'>
<input type={props.showPassword ? "text" : "password"} style={{ paddingRight:"2%", float:"left"}} name='password' className='form-control'/>
<img src={props.showPassword ? (require("./eyeslash.png")) : (require("./eye.png")) }  onClick={props.ShowHide} id="eye" alt="description of" style={{ width:"16px", height:"12px", position:'absolute', marginLeft:"-4%", marginTop:"3%"}}></img>
</div>
</div>

<div className='form-group'>
<label htmlFor='password'> Confirm Password</label> 
<div className='wrapper'>
<input type={props.confirmPass ? "text" : "password"} style={{ paddingRight:"2%", float:"left"}} name='confirmpassword' className='form-control'/>
<img src={props.confirmPass ? (require("./eyeslash.png")) : (require("./eye.png")) }  onClick={props.ConfirmHide} id="eyetwo" alt="description of" style={{ width:"16px", height:"12px", position:'absolute', marginLeft:"-4%", marginTop:"3%"}}></img>
</div>
<i style={{color:"red"}}>{props.message}</i>
</div>

<div className='form-group'>
<button type='submit' className='btn btn-primary' style={{margin: "2vh"}}>Register</button>
</div>

</form>
</div>
</div>
)

}