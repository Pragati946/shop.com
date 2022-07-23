import React, { useState } from "react";
import { Alert } from "react-bootstrap";
// import Home from "./Home";
import Style from "../Pages/SignLogin.modules.css"
import {HomePage} from "../Components/HomePage"

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
      {home ? (
        <form onSubmit={handleLogin}>
           <h3 style={{marginBottom:"40px"}}>LogIn</h3>
          <div className="form-group" style={{display:"flex",justifyContent: "center"}}>
            <label>Email</label>
            <input
             style={{width:"300px",marginBottom:"15px"}}
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>
          <div className="form-group" style={{display:"flex",justifyContent: "center"}}>
            <label>Password</label>
            <input
             style={{width:"300px",marginBottom:"15px"}}
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <HomePage/>
      )}
    </div>
  );
}

export default Login;