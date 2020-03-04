import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
  return(
    <div className="nav">
      <p><Link to="/">Home</Link></p>
      <Link to="/about"><p>About</p></Link>
    </div>
  )
}

export default Navigation;
