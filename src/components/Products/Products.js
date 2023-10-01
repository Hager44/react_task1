import React from "react";
import './Products.css';
import ProductCard from './ProductCard';

function Products(props){
return(

<section class="trips">
  <div class="d-flex justify-content-center mt-3" style={{fontFamily:'Poppins, sans-serif', fontWeight: 700,fontSize: '18px',color: '#DF6951',lineHeight: '27px'}}>
    TRENDY
  </div>
  <div class="d-flex justify-content-center trending-tour" style={{fontFamily:'Volkhov, sans-serif', fontWeight: 700,fontSize: '50px',color: '#181E4B'}}>
    Our Trending Tour
  </div>
  <div class="d-flex justify-content-center trending-tour" style={{fontFamily:'Volkhov, sans-serif', fontWeight: 700,fontSize: '50px',color: '#181E4B'}}>
    Packages
  </div>

  <div class="container-lg ">
    <div class="row my-5  align-items-center justify-content-center">
    {props.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        







  </div>
 


  </div>


</section>



);

};
export default Products;
