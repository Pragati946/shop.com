import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import {Navigate} from "react-router-dom"
function Signup() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!fname || !lname || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem("sanskarPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
    <Navigate to ="/login"/>
  }

  return (
    <>
      {/* <Navbar /> */}
      <div style={{marginBottom:"10%"}}></div>
      <div style={{  width: "60%", margin: "auto",textAlign:"left", justifyContent: "center" }}>
        {login ? (
          <form onSubmit={handleFormSubmit} >
            <h1 style={{ marginBottom: "40px" ,color:"#202340"}}>Create an account</h1>
            <p>* Indicates required field</p>

            
              <div className="form-group" >
                <h5>First name*</h5>
                <input
                  style={{ width: "60%", height: "50px", marginBottom: "15px" }}
                  type="text"

                  className="form-control"
                  placeholder="Enter Full Name"
                  name="fname"
                  onChange={(event) => setFName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <h5>Last name*</h5>
                <input
                  style={{ width: "60%", marginBottom: "15px", height: "50px", }}
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="lname"
                  onChange={(event) => setLName(event.target.value)}
                />
             

            </div>
            <div className="form-group" >
              <h5>Email</h5>
              <input
                style={{ width: "60%", marginBottom: "15px", height: "50px" }}
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group" >
              <h5>Password</h5>
              <input
                style={{ width: "60%", marginBottom: "15px", height: "50px" }}
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group" >
              <h5>Phone No.</h5>
              <input
                style={{ width: "60%", marginBottom: "15px", height: "50px" }}
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={(event) => setPhone(event.target.value)}
              />

            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block" style={{width:"60%",color:"white",borderRadius:"40px",backgroundColor:"#414467 "}}>
              Create your new account
            </button>
            <p style={{ color: "#0000FF" }} onClick={handleClick} className="forgot-password text-right">
              Already registered log in?

            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          <Navigate to="/login"/>
        )}

      </div>

    </>
  );
}

export default Signup;
