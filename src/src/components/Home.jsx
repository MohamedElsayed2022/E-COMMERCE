import React from "react";
import imageAbout from '../assets/images/home2.jpg'
function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={imageAbout} className="card-img" alt="..." height="675px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0"> NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
           CHECK OUT ALL THE TRENDS
          </p>
         
          </div>
          
        </div>
      </div>
      <Home/>
    </div>
  );
}

export default Home;
