import "./signup.css";
import { useNavigate } from "react-router-dom";
import React from "react";
const Signup =() =>{
    const lognavigate = useNavigate();
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
        <input type="mail" placeholder="email"/> 
        </div>
        <div>
        <label className="label" htmlFor="password">Password <span>*</span></label><br />
        <input type="password" placeholder="Enter strong password"/> &nbsp;
        <input type="password" placeholder="Confirm Password"/> 
        </div>

        <div className="buttons">
            <button type="submit" className="submit">Submit</button>
            <button type="reset" className="cancel-signup" onClick={()=>lognavigate("/Login")} >Cancel</button>
        </div>
        </form>
    </div>
);
}
export default Signup;
