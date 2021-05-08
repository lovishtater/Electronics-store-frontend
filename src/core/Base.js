import React from "react";
import Contact from "./contact";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-light text-dark p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-light text-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <Contact/>
    <footer className="footer bg-gradient-info text-white mt-auto py-3">
      <div className="container-fluid bg-info text-center py-3">
        <h4>
          Providing excellent services <span className="text-dark">Since 1986</span> 
        </h4>
        {/* <button className="btn btn-warning btn-lg">Contact Us</button> */}
      </div>
      <div className="container">
        
      </div>
    </footer>
  </div>
);

export default Base;
