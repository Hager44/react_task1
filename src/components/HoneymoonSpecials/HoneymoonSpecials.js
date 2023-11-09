import React from "react";
import './HoneymoonSpecials.css';
import honeymoon from "../New_folder/Illustration(3).webP";

function HoneymoonSpecials(){
return(
<section className="honeymoon-specials">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mt-5">
        <img src={honeymoon} alt="honeymoon" className="img-fluid honeymoon-photo" width="762" height="744"/>
      </div>
      <div className="col-lg-6 col-12 ps-5 pe-5 honeymoon-text">
        <h6 className="d-flex display-6  mt-5 pt-5 pb-2  lead honeymoon-specials" style={{fontFamily:'Poppins,sans-serif', fontWeight:700,fontSize: '18px',color:'#DF6951'}}>Honeymoon Specials</h6>
        <h6 className="display-6 honeymoon-paragraph" style={{fontFamily: 'Volkhov,serif',fontWeight:700,fontSize:'50px'}}>Our Romantic Tropical Destinations</h6>
        <h6 className="display-6 text-black d-lg-inline d-sm-none " style={{fontFamily: 'poppins,serif', fontWeight:400,fontSize:'16px'}}>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</h6>
        <div>
          <button type="button" className="btn mt-3" style={{backgroundColor:'#DF6951',color:'#ffffff'}}>View Packages</button>
        </div>
      </div>
    </div>
  </div>
 </section>

);

};
export default HoneymoonSpecials;