import React, { useState } from 'react';
import Login from './Login';
import { Alert } from 'bootstrap';
import { json } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [flag , setFlag] = useState(false)
  const [login , setLogin] = useState(true)


  const handleRegister = (e) => {
   e.preventDefault()
   if(!phone || !email || !password ||!name)
   {
    setFlag(true)
   }else {  
    setFlag(false)
    localStorage.setItem('name', name);
    localStorage.setItem('Email', JSON.stringify(email));
    localStorage.setItem('Password', JSON.stringify(password));
    
    console.log(name, email, password);
    setLogin(!login )
   }
  

    
  };
  const handleClick = ()=>{
     setLogin(!login)
  }
  
  return (
    <>
     {login ? 
      (
        
      <div className="container">
      <h1 className='text-center mb-4 mt-4'>Register</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="phone" className="form-control" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button className="btn btn-primary w-100">Register</button>
        <p className="mt-3" style={{cursor:"pointer"}} onClick={handleClick}>Already registered? Login here.</p>
        {flag && (
            <Alert  color="primary" variant="danger">
               Please Fill Every Field
            </Alert>
        )}
      </form>
    </div>
    ) :
    (
    <Login/>
       
    )
    }
        
    </>
  );
};

export default Register;





