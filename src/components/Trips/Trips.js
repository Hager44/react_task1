import React from "react";
import './Trips.css';
import group7 from "../New_folder/Group 7.png";
import group12 from "../New_folder/Group 12.png";
import group11 from "../New_folder/Group 11.png";
import plane from "../New_folder/Illustration(1)_new.webp";

function Trips(){
return(
<section className="trips">
    <div className="container ps-5 trips-container">
     <div className="row">

<div className="d-none d-lg-block col-lg-6 col-12">
  <h6 className="display-6 mt-5 fast-easy" style={{fontFamily:'Poppins, sans-serif', fontWeight: 700,fontSize: '18px',color: '#DF6951'}}>Fast & Easy</h6>
  <h6 className="display-6 text-black" style={{fontFamily: 'Volkhov, serif',fontWeight:700,fontSize: '50px'}}>Get Your Favourite Resort Bookings</h6>
  
  <div className="container mt-2">
    <div className="row">
      <div className="col-md-2 col-sm-8">
        <img src={group7} alt="rectangle" className="img-fluid" width="48" height="47"/>
      </div>
      <div className="col-md-10 col-sm-4">
        <div className="d-flex flex-column justify-content-center h-100">
          <h5 className="lead display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize: '16px'}}>Choose Destination</h5>
          <h6 className="display-6 d-md-inline" style={{fontFamily:'Poppins, sans-serif', fontWeight:400, fontSize: '16px', lineHeight: '19.92px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</h6>
        </div>
      </div>
    </div>
  </div>

  <div className="container mt-2">
    <div className="row">
      <div className="col-md-2 col-sm-8">
        <img src={group12} alt="rectangle" className="img-fluid" width="48" height="47"/>
      </div>
      <div className="col-md-10 col-sm-4">
        <div className="d-flex flex-column justify-content-center h-100">
          <h5 className="lead display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize: '16px'}}>Check Availability</h5>
          <h6 className="display-6 d-md-inline" style={{fontFamily:'Poppins, sans-serif', fontWeight:400, fontSize: '16px', lineHeight: '19.92px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</h6>
        </div>
      </div>
    </div>
  </div>

  <div className="container mt-2">
    <div className="row">
      <div className="col-md-2 col-sm-8">
        <img src={group11} alt="rectangle" className="img-fluid" width="48" height="47"/>
      </div>
      <div className="col-md-10 col-sm-4">
        <div className="d-flex flex-column justify-content-center h-100">
          <h5 className="lead display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize: '16px'}}>Let’s Go</h5>
          <h6 className="display-6 d-md-inline" style={{fontFamily:'Poppins, sans-serif', fontWeight:400, fontSize: '16px' ,lineHeight: '19.92px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</h6>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="d-block d-lg-none col-12">
  <h6 className="display-6 mt-5 fast-easy" style={{fontFamily:'Poppins, sans-serif', fontWeight: 700,fontSize:'18px',color: '#DF6951'}}>Fast & Easy</h6>
  <h6 className="display-6 text-black" style={{fontFamily: 'Volkhov, serif',fontWeight:700}}>Get Your Favourite Resort Bookings</h6>
  
  <div className="container mt-2">
    <div className="row">
      <div className="col-md-2 col-sm-8">
        <img src={group7} alt="rectangle" className="img-fluid" width="48" height="47"/>
      </div>
      <div className="col-md-10 col-sm-4">
        <div className="d-flex flex-column justify-content-center h-100">
          <h5 className="lead display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize: '16px'}}>Choose Destination</h5>
          <h6 className="display-6 d-sm-none d-md-inline" style={{fontFamily:'Poppins, sans-serif', fontWeight:400, fontSize: '16px', lineHeight:'19.92px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</h6>
        </div>
      </div>
    </div>
  </div>

  <div className="container mt-2">
    <div className="row">
      <div className="col-md-2 col-sm-8">
        <img src={group12} alt="rectangle" className="img-fluid" width="48" height="47"/>
      </div>
      <div className="col-md-10 col-sm-4">
        <div className="d-flex flex-column justify-content-center h-100">
          <h5 className="lead display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize: '16px'}}>Check Availability</h5>
          <h6 className="display-6 d-sm-none d-md-inline" style={{fontFamily:'Poppins, sans-serif', fontWeight:400, fontSize: '16px', lineHeight: '19.92px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</h6>
        </div>
      </div>
    </div>
  </div>

  <div className="container mt-2">
    <div className="row">
      <div className="col-md-2 col-sm-8">
        <img src={group11} alt="rectangle" className="img-fluid" width="48" height="47"/>
      </div>
      <div className="col-md-10 col-sm-4">
        <div className="d-flex flex-column justify-content-center h-100">
          <h5 className="lead display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize: '16px'}}>Let’s Go</h5>
          <h6 className="display-6 d-sm-none d-md-inline" style={{fontFamily:'Poppins, sans-serif', fontWeight:400, fontSize: '16px', lineHeight: '19.92px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</h6>
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-6 col-12">
          <img src={plane} alt="plane" className="img-fluid" width="1003" height="747"/>
        </div>
     </div>

    </div>


 </section>

);



};
export default Trips;
