import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import Style from "../Pages/SignLogin.modules.css";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
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
  }

  return (
    <>
      <div style={{ width: "40%", justifyContent: "center" ,margin:"auto",border:"1px solid grey",marginTop:"60px"}}>
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit} >
            <h3 style={{marginBottom:"40px"}}>Signup</h3>

            <div className="form-group" style={{display:"flex",justifyContent: "center"}}>
              <label>Name</label>
              <input
              style={{width:"300px",marginBottom:"15px"}}
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group" style={{display:"flex",justifyContent: "center"}}>
              <label>Email</label>
              <input
                 style={{width:"300px",marginBottom:"15px"}}
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group" style={{display:"flex",justifyContent: "center"}}>
              <label>Password</label>
              <input
              style={{width:"300px",marginBottom:"15px"}}
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group" style={{display:"flex",justifyContent: "center"}}>
              <label>Phone No.</label>
              <input
                 style={{width:"300px",marginBottom:"15px"}}
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={(event) => setPhone(event.target.value)}
              />
           
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
             Signup
            </button>
            <p style={{color:"#0000FF"}} onClick={handleClick} className="forgot-password text-right">
           Already registered log in?
             
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default Signup;
