import React from 'react';

export default function Greet(props){
return(
    <div style={{minHeight: "53vh"}}>
        <div className='container card p-3 mt-2 register-container' style={{minHeight: "33vh", minWidth:"72vh"}}>
            <h4 style={{textAlign: "center", verticalAlign: "middle", lineHeight: "90px" }}>Thank you for registering {props.user}
                <br/>
                The User has now been registered.
            </h4>
        </div>

</div>
)
}