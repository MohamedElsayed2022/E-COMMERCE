import React, { useState } from "react";
import { Products } from "../products/Products";
import { Alert } from "bootstrap";
const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
   const [home, setHome] = useState(true);
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");


function handleLogin(e){
    e.preventDefault()
    let mail = localStorage.getItem("Email").replace(/"/g , "")
    let pass = localStorage.getItem("Password").replace(/"/g , "")
   
    if(!emaillog || !passwordlog){
        setFlag(true)
        console.log("Empty")
    }else if(passwordlog !== pass || emaillog !== mail){
        setFlag(true)
    }else{
        setHome(!home)
        setFlag(false)
    }

}

  return (
    <>
    {home ? (
        <div className="container">
        <h1 className="text-center mb-3 mt-3">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3 form-group">
              <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmaillog(e.target.value)}
            />
          </div>
          <div className="mb-3 form-group">
              <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPasswordlog(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100">Login</button>
          {flag && (
              <Alert  color="primary" variant="danger">
                 Please Fill Correct Date
              </Alert>
          )}
  
        </form>
      </div>
    ):(
        <Products />
        
    )}
        
    </>
  );
};

export default Login;

