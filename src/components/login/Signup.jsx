import "./signup.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
const Signup =() =>{
    const lognavigate = useNavigate();
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
  const [showPassword,setShowPassword]=useState(true);
  const [showConfirmPassword,setShowConfirmPassword]=useState(true);
    const toggleVisibility=()=>{
        setShowPassword(!showPassword);
    }
    const toggleVisibilityForConfirm=()=>{
        setShowConfirmPassword(!showConfirmPassword);
    }
return(
    <div className="Signup">
        <h2>Create an account!</h2>
        <form >
        <div>
        <label className="label" htmlFor="UserName">UserName <span>*</span></label><br />
        <input type="text" placeholder="First Name"/> &nbsp;
        <input type="text" placeholder="Last Name"/> 
        </div>
        <div>
        <label className="label" htmlFor="Email">Email <span>*</span> </label><br />
        <input type="mail" placeholder="Email"/> 
        </div>
        <div>
        <label className="label" htmlFor="password">Password <span>*</span></label><br />
        <input type={showPassword?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter strong password"
        />
        <span className="eye-icon"><FontAwesomeIcon icon = {showPassword?faEyeSlash:faEye} onClick={toggleVisibility} /></span> &nbsp;
        <input style={{marginLeft:"1rem",}} type={showConfirmPassword?"text":"password"} placeholder="Confirm Password" value={confirmPassword} onChange={(z)=>setConfirmPassword(z.target.value)}/> 
        <span className="eye-icon"><FontAwesomeIcon icon={showConfirmPassword?faEyeSlash:faEye} onClick={toggleVisibilityForConfirm}/></span>
        </div>

        <div className="buttons">
        <button type="reset" className="cancel-signup" onClick={()=>lognavigate("/Login")} >Cancel</button>
            <button type="submit" className="submit">Submit</button>
          
        </div>
        </form>
    </div>
);
}
export default Signup;
