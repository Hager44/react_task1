import React from "react";

import './Context.css'
import iconImage from '../../New_folder/Vector 1.png';


function Context(){
    const contextStyle = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        fontSize: '58px',
      };
return(

<section className="context">
      <div className="container ">
        <div className="row">
          <div className="col ms-n5">
          <img src={iconImage} alt="an icon" className="img-fluid" width="84" height="18"/>
          </div>
        </div>
        <div className="row">
          <div className="contex">
         <div className="col">
           <div  style={contextStyle} className="d-md-inline display-4 text-white nav-text">
               No matter where<br/> you’re going to, we’ll<br/> take you there
           </div>
   
         </div>
          </div>
        </div>
   
   
      </div>
        
    </section>
);
};
export default Context;