import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ onSearch ,cartItemount }) {
    const [searchQuery, setSearchQuery] = useState('');
      const [isLoggedIn, setIsLoggedIn] = useState(false); // حالة للتحقق من تسجيل الدخول
      const name = localStorage.getItem("name")

   
  console.log(searchQuery)
  console.log(searchQuery)
  const handleSubmit = ()=>{
    if(searchQuery.trim().length){
      onSearch(searchQuery.trim())
    }
    setSearchQuery('')
  }
  return (
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light  shadow">
      <div class="container-fluid">
        <Link to="/" className="link">
          <h1 className="brand">E-commerce</h1>
        </Link>
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="search ms-auto" style={{width:"500px"}}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="button" className="search-btn" onClick={handleSubmit}>
              Search
            </button>
          </form> 
          <Link to="/" className="link">
          <p className="mt-3 ms-4">{`Hello :   ${name}`}</p>
        </Link>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/" aria-current="page" href="#">
                Home
              </Link>
            </li>
           
            <li class="nav-item">
              <Link class="nav-link" to="/user">
                Users
              </Link>
            </li>
              
                 <li class="nav-item">
              
              <Link class="nav-link" to="/login" href="#">
                Login In
              </Link>
             
            </li>
            <li class="nav-item">
              
              <Link class="nav-link" to="/register" href="#">
                Register
              </Link>
             
            </li>
              
          
            
            <li className='nav-item'>
            <Link to="/cart" className="link headerCart ">

                         <img className="cartImg" src="/cart.svg" style={{color: "blue",backgroundColor: "blue", borderRadius: "90px",padding: "6px"}} alt="cart" />
                        {cartItemount > 0 && (
                           <div className='cartCounter'>
                             {cartItemount <= 9 ? cartItemount : "9+"}
                           </div>
                       )}

             </Link>
            </li>
          
          
           
          </ul>
       
        </div>
      </div>
    </nav>
  );
}

export {Navbar}
