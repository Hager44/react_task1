import React from "react";
import vector1 from "../New_folder/Vector.png";
import vector2 from "../New_folder/Vector (1).png";
import star from "../New_folder/bi_star-fill.png";
import location from "../New_folder/ep_location.png";
function ProductCard(props){
return(
    <div className="col-lg-4   trips-countries " style={{maxHeight:'615px',marginBottom:"7rem"}}>
    <div style={{position: 'relative'}}>
    <img src={props.product.image} alt="image" style={{width:"100%"}} width="415.99" height="331.3"/>
    <img src={props.product.city1} alt="symbolimage" style={{ marginTop: "-3rem" }} width="131" height="131"/>
      
    </div>
      <div className="card-body text-start  position-relative mb-5" style={{marginTop:"-2rem"}}>
        <img src={vector1} alt="" width="20" height="20"/>
        <h6 className="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.product.days} days</h6>
        <img src={vector2} alt="" className="ms-4" width="20" height="18"/>
        <h6 className="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.product.people} People going</h6>
        <div className="d-flex justify-content-between align-items-center ">
        <a href="https://en.wikipedia.org/wiki/Bern" className="card-title country" style={{color:'#2F2F2F',fontFamily:'Poppins, sans-serif', fontWeight:700,fontSize:'29px',textDecoration: 'none'}} aria-label={`Visit the Wikipedia page for ${props.product.city}`}>{props.product.city}</a>
        <div className="d-inline ">
          <img src={star} alt="" width="16" height="16"/>
        <img src={star} alt="" width="16" height="16"/>
        <img src={star} alt="" width="16" height="16"/>
        <img src={star} alt="" width="16" height="16"/>
        <img src={star} alt="" width="16" height="16"/>
        </div>
        </div>
        
        <img src={location} alt="" width="29" height="28"/>
        <h6 className="display-6 d-inline " style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.product.country}</h6>
        <br/>
        <p className="display-5 fw-bold d-inline me-3 ms-2 " style={{color: '#DF6951',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '29px'}}>{props.product.priceAfter}$</p>
        <p className="display-5 fw-bold d-inline" style={{textDecoration: 'line-through', color:'#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '22px'}}>{props.product.priceBefore}</p>
        <p className="card-text ms-2 mt-2 d-none d-lg-block" style={{fontFamily:'Poppins, sans-serif', fontWeight:400,fontSize:'12px',color: 'black',letterSpacing:'2px'}}>{props.product.text}</p>
        <a href="#" className="btn btn-lg mt-1" style={{backgroundColor: '#DF6951',color: 'white'}}>
          Explore Now
        </a>
      </div>
  </div>
);
};
export default ProductCard;
