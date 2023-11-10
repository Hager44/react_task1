import React from "react";
import './Clients.css';
import travel_concept from "../New_folder/Travel_Concepts_2 1.webp";
import ellipse_624 from "../New_folder/Ellipse 624.webP";
import vector_6 from "../New_folder/Vector (6).png";
import ellipse_2 from "../New_folder/download.png";

function Client(){
return(
<section className="clients">
  <div className="container-fluid background-container3">
      <div className="d-flex justify-content-center align-items-center mt-5 position-relative quote" style={{height:'70%'}}>
        <div className=" position-absolute promote" style={{zIndex: 1,letterSpacing:'3px',fontFamily:'Poppins, sans-serif', fontWeight: 700,fontSize: '25px',lineHeight:'18px',color:'#DF6951',left:'50%', top:'24%', transform: 'translate(-50%, -50%)'}}>PROMOTIONS</div>
        <div className=" position-absolute mt-3 reviews" style={{zIndex:1,letterSpacing:'5px', fontFamily:'Volkhov,sans-serif', fontWeight:700,fontSize:'50px',lineHeight:'45px',color:'#181E4B',left:'50%', top:'35%', transform: 'translate(-50%, -50%)'}}>See What Our Clients Say About us</div>
        <img src={travel_concept} alt="travel_concepts" className="position-absolute" style={{zIndex:1,marginRight:'1450px',marginTop:'300px'}}/>
       
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators" style={{bottom:'-5rem'}}>
            <button type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{backgroundColor:'#000'}}></button>
            <button type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide-to="1" aria-label="Slide 2" style={{backgroundColor:'#000'}}></button>
           
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container" >
                <img src={ellipse_624} alt="Ellipse" className="client-ellipse1" style={{marginTop:'15rem',marginLeft:'9rem',zIndex:1}} width="174" height="174"/>
                 <div className="" style={{fontFamily:'Poppins,sans-serif', fontWeight:400,fontSize:'12px',color:'#000',border:'50px solid #ffffff',backgroundColor: '#ffffff',marginTop:'-5rem',borderRadius:'10px',textAlign:'center'}}>
                  <div className=" " >Vel officiis dolor ea illo aut eligendi ullam non laudantium<br/> magnam et recusandae molestiae sit iure unde aut<br/> voluptate quaerat. Id sunt provident quo possimus<br/> impedit vel doloremque obcaecati qui ullam consectetur<br/> et ipsum omnis.</div>
                  <div className="fw-bold mt-2">Christine Beckam - Designer</div>
                </div>
                  <img src={vector_6} alt="Vector" className="position-absolute client-vector" style={{zIndex:1,bottom:'105px',right:'358px'}}/>
                  </div>
            </div>
            <div className="carousel-item">
              <div className="container" >
                <img src={ellipse_2} alt="Ellipse" className="client-ellipse2" style={{marginTop:'16rem',marginLeft:'11rem',zIndex:1}}/>
                 <div className="" style={{fontFamily:'Poppins,sans-serif', fontWeight:400,fontSize:'12px',color:'#000',border:'50px solid #ffffff',backgroundColor:'#ffffff',marginTop:'-2rem',borderRadius:'10px',textAlign:'center'}}>
                  <div className=" " >Vel officiis dolor ea illo aut eligendi ullam non laudantium<br/> magnam et recusandae molestiae sit iure unde aut<br/> voluptate quaerat. Id sunt provident quo possimus<br/> impedit vel doloremque obcaecati qui ullam consectetur<br/> et ipsum omnis.</div>
                  <div className="fw-bold mt-2">Christine Beckam - Designer</div>
                </div>
                  
                </div>
            </div>
            
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControlsNoTouching" data-bs-slide="prev" role="button" style={{top:'315px',left:'-32px'}}>
          
            <span className="carousel-control-prev-icon" style={{backgroundColor:'#000',border:'2px solid black',borderRadius:'22px'}}aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControlsNoTouching" data-bs-slide="next" role="button" style={{top: '315px',right: '-32px'}}>
            <span className="carousel-control-next-icon" style={{backgroundColor: '#000',border: '2px solid black',borderRadius: '22px'}}></span>
          </a>
        </div>
      </div>

    </div>

    

 


</section>
);
};
export default Client;