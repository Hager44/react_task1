import React from 'react';
import './Explore.css';

import line3 from "../New_folder/Line-3 (3).png";
import line8 from "../New_folder/Line-8 (1).png";
function Explore(){
    return(
        <section className="Explore">
        <div className="container-fluid mt-5">
           <div className="row background-cont">
             <div className="col-lg-6 col-12 mt-5 background-container2 drop-shadow">
               <div className="d-flex justify-content-center align-items-center mt-5 position-relative " style={{height:'70%'}}>
                 <div className=" mb-4 position-absolute explore1-img" style={{zIndex:1,letterSpacing:'5px',height:'100px',fontFamily:'Poppins,sans-serif', fontWeight: 700,fontSize: '25px',lineHeight:'27px',color:'#FFEFEC'}}>PROMOTIONS</div>
                 <div className="mb-4 position-absolute explore1-text" style={{zIndex: 1,letterSpacing: '5px', height:'20px',fontFamily:'Volkhov,sans-serif',fontWeight:700,fontSize:'50px',lineHeight:'27px',color:'#ffffff'}}>Explore Nature</div>
                 <img src={line3} alt="line" className="position-absolute mt-5 ps-5 explore-line" style={{zIndex: 1,marginLeft:'30%'}}/>
                 <div style={{marginLeft:'-8rem'}}>
                   <button type="button" className="btn text-white position-absolute" style={{backgroundColor:'none',borderColor:'#FFFFFF',borderRadius:'7px',borderStyle:'solid',marginTop:'3rem',fontFamily:'Poppins, sans-serif', fontWeight: 600,fontSize:'16px',color:'white',zIndex:1}}>View Packages</button>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 col-12 mt-5 background-container drop-shadow" >
               <div className="d-flex justify-content-center align-items-center mt-5 position-relative " style={{height:'70%'}}>
                 <div className=" mb-4 position-absolute explore2-img" style={{zIndex:1,letterSpacing:'5px',height:'100px',fontFamily:'Poppins, sans-serif', fontWeight: 700,fontSize: '25px',lineHeight:'27px',color:'#FFEFEC'}}>PROMOTIONS</div>
                 <div className="mb-4 position-absolute explore2-text" style={{zIndex:1,letterSpacing:'5px', height: '20px',fontFamily:'Volkhov, sans-serif', fontWeight: 700,fontSize: '50px',lineHeight: '27px',color:'#ffffff'}}>Explore Cities</div>
                 <img src={line8} alt="line" className="position-absolute mt-5 ps-5 explore-line" style={{zIndex:1,marginLeft:'20%'}}/>
                 <div style={{marginLeft:'-8rem'}}>
                   <button type="button" className="btn text-white position-absolute" style={{backgroundColor:'none',borderColor:'#ffffff',borderRadius:'7px',borderStyle:'solid',marginTop:'3rem',fontFamily:'Poppins, sans-serif', fontWeight:600,fontSize:'16px',zIndex: 1}}>View Packages</button>
                 </div>
               </div>
             </div>
             
       
       
           </div>
        </div>
       
       
       
       </section>



    );
};
export default Explore;