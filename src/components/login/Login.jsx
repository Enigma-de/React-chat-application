import "./login.css";
const Login= ()=> {
return(
<div className="login">
  <h2> Welcome Back!</h2>  
  <form>
    <input type="text" name="username" id="username" placeholder="Username" />
    <input type="password" name="password" id="password" placeholder="Password" />
    <input type="button" value="LogIn" />
  </form>
  <p className="noaccountline">Don't Have an account? <button className="R\egister">Register</button></p>
  </div>

)
}
export default Login;
// idea: lets do it this way; when user clicks Register lead him to the component signup 