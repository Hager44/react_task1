import React from "react";
import './Navigationbar.css';
import { Link } from 'react-router-dom'; 
import arrow from '../../New_folder/Arrow05_(1).png';
function Navigationbar(){
    const dropdownMenuStyle = {
        backgroundColor: "rgba(217, 217, 217, 0.34)",
      };
      const textStyle = {
        fontFamily: 'Volkhov, serif',
        fontWeight: 700,
        fontSize: '31px',
      };
    
      const arrowStyle = {
        fontFamily: 'Circular Std, sans-serif',
        fontWeight: 500,
        fontSize: '17px',
      };
    
      const navTextStyle = {
        fontFamily: 'Circular Std, sans-serif',
        fontWeight: 500,
        fontSize: '17px',
        color:'white',
      };
    
      const customInputStyle = {
        width: '110px',
        backgroundColor: 'transparent',
        outline: 'none',
        borderRight: '2px solid #f3f3f378',
        borderTop: 'none',
        borderLeft: 'none',
        borderBottom: 'none',
        boxShadow: 'none',
        color: 'white',
        borderRadius: '0%',
      };
     
     
    return(
        <section className="navigation-bar">
    <nav className="navbar navbar-expand-lg navbar-dark  pb-4">
     <div className="container">
      <Link to='/' className="navbar-brand" href="#intro">

      <div className="container">
             <div className="row">
               <div className="col">
                <div className=" me-5" style={textStyle}>Travel</div>
               </div>
             </div>
        <div>
             <div className="row ms-1">
             <div className="col">
              <img src={arrow} alt="arrow" className="img-fluid" width="99" height="39"/>
             </div>
             </div>
            </div>
        </div>
       
        </Link>
    
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse "  id="main-nav" >
            <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/dashboard" className="nav-link text-white" style={navTextStyle}>Dashboard</Link>
              </li>
              <li className="nav-item">
               
                <Link to="/" className="nav-link text-white"  style={navTextStyle}>Home</Link>
               
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#reviews" style={navTextStyle}>About</a>
              </li>
              <li className="nav-item dropdown" >
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={navTextStyle}>
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={dropdownMenuStyle}>
                  <li><a className="dropdown-item" href="#" style={navTextStyle}>Honeymoon Packages</a></li>
                  <li><a className="dropdown-item" href="#" style={navTextStyle}>Tours Packages</a></li>
                  <li><a className="dropdown-item" href="#" style={navTextStyle}>Musical Events</a></li>
                  <li><a className="dropdown-item" href="#" style={navTextStyle}>Build Package</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#" style={navTextStyle}>Upcoming packages</a>
              </li>
            </ul>
        </div>
          <div className="nav-item ms-2 d-none d-md-inline">
            <a className="btn" style={{ backgroundColor: '#DF6951', color: '#ffffff', fontFamily: 'Circular Std, sans-serif', fontWeight: 500, fontSize: '17px' }} href="#pricing">Get in Touch</a>
          </div>
     </div>
    </nav> 
   </section>
    );

};
export default Navigationbar;