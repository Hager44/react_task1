import React, { Fragment } from "react";
import './Services.css';

import second_img from "../New_folder/Rectangle157.png";
import tour_guide from "../New_folder/tour-guide 1.png";
import rect_157 from "../New_folder/Rectangle157_(2).png";
import rect_158 from "../New_folder/Rectangle158.png";
import travelling from "../New_folder/travelling 1.png";
import rect_159 from "../New_folder/Rectangle159.png";
import hands from "../New_folder/hands 1.png";
import rect_160 from"../New_folder/Rectangle160.png";
import medical_team from "../New_folder/medical-team 1.png";
function Services(){
  return(
<Fragment>
<section className="services d-none d-md-block">
  <div className="container d-flex justify-content-center mt-5">
    <div className="row">
      
    
      <div className="col-3 position-relative new">
        <img src={rect_157} alt="rect" className="position-absolute new_rect new_rect1" />
        <div className="row-white-box position-relative">
          
          <img src={second_img} alt="second-image" className="position-absolute mt-5 rectangle0 rectangle0_1"/>
          <img src={tour_guide} alt="travelling" className="ms-5 tour_guide"/>
          
          <h5 className="display-5" style={{fontFamily:'Poppins,sans-serif',fontWeight:600, fontSize: '20px'}}>Guided Tours</h5>
          <h6 className="display-6" style={{fontFamily:'Poppins,sans-serif', fontWeight:500, fontSize:'16px'}}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</h6>
        </div>
      </div>
      
     
      <div className="col-3 position-relative new">
        <img src={rect_157} alt="rect" className="position-absolute new_rect" style={{top:'11rem',right:"80%",visibility:'hidden'}}/>
        <div className="row-white-box position-relative" style={{marginTop:'-20px'}}>
          <img src={rect_158} alt="second-image" className="position-absolute mt-5 rectangle" style={{top:'auto', transform: 'translate(-50%, -50%)',zIndex:-1,left:'30%'}}/>
          <img src={travelling} alt="travelling" className="ms-5 travelling"/>
          
          <h5 className="display-5" style={{fontFamily:'Poppins,sans-serif', fontWeight:600,fontSize: '20px'}}>Best Flights Options</h5>
          <h6 className="display-6" style={{fontFamily:'Poppins, sans-serif', fontWeight:500,fontSize: '16px'}}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</h6>
        </div>
      </div>
     
     
      <div className="col-3 position-relative new">
        <img src={rect_157} alt="rect" className="position-absolute new_rect" style={{top: '10rem',right:'80%',visibility: 'hidden'}}/>
        <div className="row-white-box position-relative">
          <img src={rect_159} alt="second-image" className="position-absolute mt-5 rectangle1" style={{top:'auto', transform: 'translate(-50%,-50%)',zIndex:-1,left:'35%'}}/>
          <img src={hands} alt="hands" className="ms-5 hands"/>
          
          <h5 className="display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:600,fontSize:'20px'}}>Religious Tours</h5>
          <h6 className="display-6" style={{fontFamily:'Poppins,sans-serif', fontWeight:500,fontSize: '16px'}}>sunt qui repellat saepe<br/> quo velit aperiam id<br/> aliquam placeat.</h6>
        </div>
      </div>
      
 
      <div className="col-3 position-relative new">
        <img src={rect_157} alt="rect" className="position-absolute new_rect" style={{top:'10rem',right:'80%',visibility:'hidden'}}/>
        <div className="row-white-box position-relative">
          <img src={rect_160} alt="second-image" className="position-absolute mt-5 rectangle2" style={{top:'auto', transform: 'translate(-50%, -50%)',zIndex:-1,left:'35%'}}/>
          <img src={medical_team} alt="hands" className="ms-5 medicalteam" />
          
          <h5 className="display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:600,fontSize:'20px'}}>Religious Tours</h5>
          <h6 className="display-6" style={{fontFamily:'Poppins, sans-serif', fontWeight:500,fontSize: '16px'}}>sunt qui repellat saepe<br/> quo velit aperiam id<br/> aliquam placeat.</h6>
        </div>
      </div>
      
    </div>
  </div>
</section>
<section className="services d-md-none">
  <div className="container mt-5">
    <div className="row">
      <div className="col-12 position-relative new">
        <img src={rect_157} alt="rect" className="position-absolute new_rect" style={{top: '11rem', right: '69%', visibility: 'hidden'}}/>
        <div className="row-white-box position-relative text-center">
          
          <img src={second_img} alt="second-image" className="position-absolute mt-5" style={{top:'auto', transform: 'translate(-50%, -50%)',zIndex:-1,left:'64%'}}/>
          <img src={tour_guide} alt="travelling" className="ms-5 tour_guide"/>
          
          <h5 className="display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:600, fontSize: '20px'}}>Guided Tours</h5>
          <h6 className="display-6" style={{fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize: '16px'}}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</h6>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12 position-relative new">
        <img src={rect_157} alt="rect" className="position-absolute new_rect" style={{top: '11rem',right:'69%',visibility: 'hidden'}}/>
          <div className="row-white-box position-relative text-center" >
            <img src={rect_158} alt="second-image" className="position-absolute mt-5" style={{top:'auto', transform: 'translate(-50%, -50%)',zIndex:-1,left:'54%'}}/>
            <img src={travelling} alt="travelling" className="ms-5 travelling"/>
            
            <h5 className="display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:600,fontSize: '20px'}}>Best Flights Options</h5>
            <h6 className="display-6" style={{fontFamily:'Poppins, sans-serif', fontWeight:500,fontSize: '16px'}}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</h6>
          </div>
      </div>
    </div>
   

    <div className="row">
      <div className="col-12 position-relative new">
        <img src={rect_157} alt="rect" className="position-absolute new_rect" style={{top: '11rem',right:'69%',visibility: 'hidden'}}/>
        <div className="row-white-box position-relative text-center">
          <img src={rect_159} alt="second-image" className="position-absolute mt-5" style={{top:'auto', transform: 'translate(-50%, -50%)',zIndex:-1,left:'64%'}}/>
          <img src={hands} alt="hands" className="ms-5 hands"/>
          
          <h5 className="display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:600,fontSize: '20px'}}>Religious Tours</h5>
          <h6 className="display-6" style={{fontFamily:'Poppins, sans-serif', fontWeight:500,fontSize: '16px'}}>sunt qui repellat saepe<br/> quo velit aperiam id<br/> aliquam placeat.</h6>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12 position-relative new">
        <img src={rect_157} alt="rect" className="position-absolute new_rect" style={{top: '11rem',right:'69%',visibility: 'hidden' }}/>
        <div className="row-white-box position-relative text-center">
          <img src={rect_160} alt="second-image" className="position-absolute mt-5" style={{top:'auto', transform: 'translate(-50%, -50%)',zIndex:-1,left:'64%'}}/>
          <img src={medical_team} alt="hands" className="ms-5 medical_team" />
          
          <h5 className="display-5" style={{fontFamily:'Poppins, sans-serif', fontWeight:600,fontSize: '20px'}}>Religious Tours</h5>
          <h6 className="display-6" style={{fontFamily:'Poppins, sans-serif', fontWeight:500,fontSize: '16px'}}>sunt qui repellat saepe<br/> quo velit aperiam id<br/> aliquam placeat.</h6>
        </div>
      </div>
    </div>
    
  </div>
</section>
</Fragment>
  );
};
export default Services;