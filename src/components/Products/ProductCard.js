import React from "react";
import vector1 from "../New_folder/Vector.png";
import vector2 from "../New_folder/Vector (1).png";
import star from "../New_folder/bi_star-fill.png";
import location from "../New_folder/ep_location.png";
function ProductCard(props){
return(
    <div className="col-lg-4   trips-countries">
    <div style={{position: 'relative'}}>
    <img src={props.product.image} alt="image"/>
    {props.index < props.countrySymbols.length ? (
          <img src={props.countrySymbols[props.index].countrySymbol} alt="symbolimage" style={{ marginTop: "-3rem" }} />
        ) : null}
    </div>
      <div className="card-body text-start  position-relative mb-5" style={{marginTop:"-2rem"}}>
        <img src={vector1} alt=""/>
        <h6 className="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.product.days} days</h6>
        <img src={vector2} alt="" className="ms-4"/>
        <h6 className="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.product.people} People going</h6>
        <div className="d-flex justify-content-between align-items-center ">
        <a href="https://en.wikipedia.org/wiki/Bern" className="card-title country" style={{color:'#2F2F2F',fontFamily:'Poppins, sans-serif', fontWeight:700,fontSize:'29px',textDecoration: 'none'}}>{props.product.city}</a>
        <div className="d-inline ">
          <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        
        <img src={location} alt=""/>
        <h6 className="display-6 d-inline " style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.product.country}</h6>
        <br/>
        <p className="display-5 fw-bold d-inline me-3 ms-2 " style={{color: '#DF6951',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '29px'}}>{props.product.priceBefore}$</p>
        <p className="display-5 fw-bold d-inline" style={{textDecoration: 'line-through', color:'#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '22px'}}>{props.product.priceAfter}</p>
        <p className="card-text ms-2 mt-2 d-none d-lg-block" style={{fontFamily:'Poppins, sans-serif', fontWeight:400,fontSize:'12px',color: 'black',letterSpacing:'2px'}}>{props.product.text}</p>
        <a href="#" className="btn btn-lg mt-1" style={{backgroundColor: '#DF6951',color: 'white'}}>
          Explore Now
        </a>
      </div>
  </div>
);
};
export default ProductCard;