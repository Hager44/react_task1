import React from "react";
import './Promotion.css';
import rectangle19295 from "../New_folder/Rectangle 19295.webP";
import dollar_400 from "../New_folder/Group 1000001690.png";
import dollar_500 from "../New_folder/Group 1000001692.png";
import rectangle19297 from "../New_folder/Rectangle 19297.webP";
import dollar_600 from "../New_folder/Group 1000001693.png";
import rectangle19298 from "../New_folder/Rectangle 19298.webP"; 
import illustration from "../New_folder/Illustration (2).webP";
import dollar_450 from "../New_folder/Group 1000001691.png";
import rectangle19296 from"../New_folder/Rectangle 19296.webP";


function Promotion(){
return(
    <section class="promotion" style={{overflow:'hidden'}}>
    <div class="container ms-0 ps-5 promotion-container" >
      <div class="row">
        <div class="col-lg-6 col-12">
          <h6 class="display-6 mt-5 promotion-paragraph" style={{fontFamily:'Poppins,sans-serif', fontWeight:700,fontSize:'18px',color:'#DF6951'}}>Promotion</h6>
          <h6 class="display-6 text-black " style={{fontFamily:'Volkhov,serif',fontWeight:700}}>We Provide You Best Europe Sightseeing Tours</h6>
          <h6 class="display-6 labore" style={{fontFamily:'Poppins,sans-serif',fontWeight:400,fontSize:'16px'}}>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</h6>
          <div>
            <button type="button" class="btn mt-3" style={{backgroundColor:'#DF6951',color:'#ffffff'}}>View Packages</button>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-3"style={{position:'relative'}}>
          <img src={rectangle19295} alt="destination" class="img-fluid mb-lg-0 mb-5 promotion-rectangle" width="237" height="231"/ >
          <img src={dollar_400} alt="400$" class="position-absolute" style={{position:'absolute',left:'50%',top:'15%',transform:'translate(-50%, -50%)', zIndex:1, maxWidth:'100%', maxHeight:'100%'}}/>
          
        </div>
        <div class="col-lg-3"style={{position:'relative'}}>
          <img src={dollar_450} alt="400$" class="position-absolute" style={{position: 'absolute', left: '50%',top:'15%', transform:'translate(-50%, -50%)', zIndex: 1, maxWidth: '100%', maxHeight: '100%'}}/>
          <img src={rectangle19296} alt="destination" class="img-fluid mb-lg-0 mb-5 promotion-rectangle" width="237" height="231"/>
        </div>
        <div class="col-lg-3" style={{position:'relative'}}>
          <img src={dollar_500} alt="400$" class="position-absolute" style={{position:'absolute',left:'50%',top:'15%',transform:'translate(-50%, -50%)', zIndex:1, maxWidth:'100%', maxHeight:'100%'}}/>
          <img src={rectangle19297} alt="destination" class="img-fluid mb-lg-0 mb-5 promotion-rectangle" width="237" height="231"/>
        </div>
        <div class="col-lg-3 " style={{position:'relative'}}>
  
          <img src={dollar_600} alt="400$" class="position-absolute mb-lg-0 mb-5" style={{position:'absolute',left: '50%',top:'15%',transform: 'translate(-50%, -50%)', zIndex: 1, maxWidth: '100%', maxHeight:'100%'}}/>
          <img src={rectangle19298} alt="destination" class="img-fluid promotion-rectangle" width="237" height="231"/ >
          <img src={illustration} alt="background" style={{position: 'absolute', top:'-275px', right:'0px', zIndex:-1,left:'24px', height:'500px'}} class="eifel-tower"/>
          
        </div>
      
      </div>
    </div>
  
   </section>
);

};
export default Promotion;