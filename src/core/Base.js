import React from "react";
import Contact from "./contact";
import Menu from "./Menu";

const Base = ({
  title ,
  description ,
  className ,
  children
}) => (
  <div>
    <Menu />
    {/* <div className="container-fluid"> */}
      {title && (
      <div className="jumbotron bg-light text-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      )}
      <div className={className}>{children}</div>
    {/* </div> */}
    
    <footer className="footer bg-gradient-info text-white mt-auto py-3">
      <div className="container-fluid bg-info text-center py-3">
        <h4>
          Providing excellent services <span className="text-dark">Since 1986</span> 
        </h4>
        {/* <button className="btn btn-warning btn-lg">Contact Us</button> */}
      </div>

    </footer>
  </div>
);

export default Base;
