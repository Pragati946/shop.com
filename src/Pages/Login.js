import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import {Link} from "react-router-dom"
import Style from "../Pages/SignLogin.modules.css"
import {HomePage} from "../Components/HomePage"
import {Navigate} from "react-router-dom"
function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass||  emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      
    }
  }
  return ( 
    <div>
    {/* <Navbar/> */}
    <div style={{marginBottom:"10%"}}></div>
      <div style={{  width: "60%", margin: "auto",textAlign:"left", justifyContent: "center" }}>
      {home ? (
        <div style={{display:"flex",width:"100%",gap:"40px",margin:"auto"}}>
          <div style={{width:"45%"}} >
          <form onSubmit={handleLogin}>
           <h3 style={{marginBottom:"40px",color:"#202340"}}><b>Sign in</b></h3>
          <div className="form-group" style={{justifyContent: "center"}}>
            <h6>Email address:</h6>
            <input
             style={{ width: "100%", height: "50px", marginBottom: "15px" }}
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>
          <div className="form-group" style={{justifyContent: "center"}}>
            <h6>Password:</h6>
            <input
             style={{ width: "100%", height: "50px", marginBottom: "15px" }}
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <button type="submit"  style={{width:"100%",color:"white",borderRadius:"40px",backgroundColor:"#414467 ", height: "50px"}}>
          <h4>Sign In</h4>
          </button>
          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
        </div>
        <div style={{textAlign:"left",marginTop:"60px"}}>
          <h3>Don't have an account?</h3>
          <p>With a SHOP.COM account, you can enjoy the <br/>
          following benefits: up to 50% Cashback on eligible<br/> 
          purchases, redeem discount coupons, order status<br/>
           and history, saved payment options and addresses,<br/>
            exclusive emails and more.</p>
         <Link to="/signup"><button type="submit"style={{width:"70%",color:"white",borderRadius:"40px", height: "50px",backgroundColor:"#414467 "}}>
          <h4> Create your new account</h4></button></Link>
        </div>
        </div>
        
      ) : (
        <Navigate to="/"/>
      )}
      </div>
    </div>
  );
}

export default Login;