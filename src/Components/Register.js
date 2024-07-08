import React from 'react';
import './Form.css'

export default function Register(props){
return(
    <div style={{minHeight: "53vh"}}>
<div className='container card p-3 mt-2 register-container' style={{minHeight: "33vh", minWidth: "40vh"}} >
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

<div class=" password-section"> 
<label htmlFor='password'>Password</label> 
<input type={props.showPassword ? "text" : "password"} name='password' className='form-control'/>
<span class={props.showPassword ?"fa fa-eye-slash":"fa fa-eye"} id="togglePassword" onClick={props.ShowHide}></span>
</div>
</div>

<div className='form-group'>
<div class=" password-section"> 
<label htmlFor='password'>Password</label> 
<input type={props.confirmPass ? "text" : "password"} name='password' className='form-control'/>
<span class={props.confirmPass ?"fa fa-eye-slash":"fa fa-eye"} id="togglePassword" onClick={props.ConfirmHide}></span>
</div>
</div>
<i style={{color:"red"}}>{props.message}</i>


<div className='form-group'>
<button type='submit' className='btn btn-primary' style={{margin: "2vh"}}>Register</button>
</div>

</form>
</div>
</div>
)

}