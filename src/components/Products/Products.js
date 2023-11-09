import React from "react";
import './Products.css';
import ProductCard from './ProductCard';

function Products(props){
  const countrySymbols = [
    {
      countrySymbol:
        "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(3).png?alt=media&token=fe5f24af-606f-4aa7-95a4-941513682ffa&_gl=1*1bf5jne*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ4NjYuNTEuMC4w"
      },
    {
     
      countrySymbol:
       "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*eernb0*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5NDkuNTQuMC4w"
      },
    {
  
      countrySymbol:
        "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(1).png?alt=media&token=9560afb9-e83a-44bf-9855-8cfb4260e7aa&_gl=1*cx7gx1*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5ODUuMTguMC4w"
      },
    {
      
      countrySymbol:
      "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(2).png?alt=media&token=a5a14622-768a-4dde-bbf0-8a528280a4f6&_gl=1*tnxn5e*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwMTcuNjAuMC4w"
      },
    {
      countrySymbol:
"https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2F1.png?alt=media&token=0bb9d797-8f21-4e15-870b-b6ccee2f3ef1&_gl=1*1thltxh*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwNTQuMjMuMC4w"  
},
    {
      countrySymbol:
         "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*1en3zvq*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODM1NDAuNy4wLjA."
        
        },
        {
          countrySymbol:
          "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(5).png?alt=media&token=af0cc9c9-ca5d-4d20-8ccc-6e28fb1695d2&_gl=1*va414i*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwODUuNTguMC4w"
          },
          {
            countrySymbol:
              "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(3).png?alt=media&token=fe5f24af-606f-4aa7-95a4-941513682ffa&_gl=1*1bf5jne*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ4NjYuNTEuMC4w"
            },
          {
           
            countrySymbol:
             "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*eernb0*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5NDkuNTQuMC4w"
            },
          {
        
            countrySymbol:
              "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(1).png?alt=media&token=9560afb9-e83a-44bf-9855-8cfb4260e7aa&_gl=1*cx7gx1*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5ODUuMTguMC4w"
            },
          {
            
            countrySymbol:
            "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(2).png?alt=media&token=a5a14622-768a-4dde-bbf0-8a528280a4f6&_gl=1*tnxn5e*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwMTcuNjAuMC4w"
            },
          {
            countrySymbol:
      "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2F1.png?alt=media&token=0bb9d797-8f21-4e15-870b-b6ccee2f3ef1&_gl=1*1thltxh*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwNTQuMjMuMC4w"  
      },
          {
            countrySymbol:
               "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*1en3zvq*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODM1NDAuNy4wLjA."
              
              },
              {
                countrySymbol:
                "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(5).png?alt=media&token=af0cc9c9-ca5d-4d20-8ccc-6e28fb1695d2&_gl=1*va414i*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwODUuNTguMC4w"
                },
                {
                  countrySymbol:
                    "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(3).png?alt=media&token=fe5f24af-606f-4aa7-95a4-941513682ffa&_gl=1*1bf5jne*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ4NjYuNTEuMC4w"
                  },
                {
                 
                  countrySymbol:
                   "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*eernb0*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5NDkuNTQuMC4w"
                  },
                {
              
                  countrySymbol:
                    "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(1).png?alt=media&token=9560afb9-e83a-44bf-9855-8cfb4260e7aa&_gl=1*cx7gx1*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5ODUuMTguMC4w"
                  },
                {
                  
                  countrySymbol:
                  "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(2).png?alt=media&token=a5a14622-768a-4dde-bbf0-8a528280a4f6&_gl=1*tnxn5e*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwMTcuNjAuMC4w"
                  },
                {
                  countrySymbol:
            "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2F1.png?alt=media&token=0bb9d797-8f21-4e15-870b-b6ccee2f3ef1&_gl=1*1thltxh*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwNTQuMjMuMC4w"  
            },
                {
                  countrySymbol:
                     "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*1en3zvq*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODM1NDAuNy4wLjA."
                    
                    },
                    {
                      countrySymbol:
                      "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(5).png?alt=media&token=af0cc9c9-ca5d-4d20-8ccc-6e28fb1695d2&_gl=1*va414i*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwODUuNTguMC4w"
                      },
                      {
                        countrySymbol:
                          "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(3).png?alt=media&token=fe5f24af-606f-4aa7-95a4-941513682ffa&_gl=1*1bf5jne*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ4NjYuNTEuMC4w"
                        },
                      {
                       
                        countrySymbol:
                         "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*eernb0*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5NDkuNTQuMC4w"
                        },
                      {
                    
                        countrySymbol:
                          "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(1).png?alt=media&token=9560afb9-e83a-44bf-9855-8cfb4260e7aa&_gl=1*cx7gx1*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5ODUuMTguMC4w"
                        },
                      {
                        
                        countrySymbol:
                        "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(2).png?alt=media&token=a5a14622-768a-4dde-bbf0-8a528280a4f6&_gl=1*tnxn5e*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwMTcuNjAuMC4w"
                        },
                      {
                        countrySymbol:
                  "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2F1.png?alt=media&token=0bb9d797-8f21-4e15-870b-b6ccee2f3ef1&_gl=1*1thltxh*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwNTQuMjMuMC4w"  
                  },
                      {
                        countrySymbol:
                           "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*1en3zvq*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODM1NDAuNy4wLjA."
                          
                          },
                          {
                            countrySymbol:
                            "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(5).png?alt=media&token=af0cc9c9-ca5d-4d20-8ccc-6e28fb1695d2&_gl=1*va414i*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwODUuNTguMC4w"
                            },
                            {
                              countrySymbol:
                                "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(3).png?alt=media&token=fe5f24af-606f-4aa7-95a4-941513682ffa&_gl=1*1bf5jne*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ4NjYuNTEuMC4w"
                              },
                            {
                             
                              countrySymbol:
                               "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*eernb0*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5NDkuNTQuMC4w"
                              },
                            {
                          
                              countrySymbol:
                                "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(1).png?alt=media&token=9560afb9-e83a-44bf-9855-8cfb4260e7aa&_gl=1*cx7gx1*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODQ5ODUuMTguMC4w"
                              },
                            {
                              
                              countrySymbol:
                              "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(2).png?alt=media&token=a5a14622-768a-4dde-bbf0-8a528280a4f6&_gl=1*tnxn5e*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwMTcuNjAuMC4w"
                              },
                            {
                              countrySymbol:
                        "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2F1.png?alt=media&token=0bb9d797-8f21-4e15-870b-b6ccee2f3ef1&_gl=1*1thltxh*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwNTQuMjMuMC4w"  
                        },
                            {
                              countrySymbol:
                                 "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(6).png?alt=media&token=bf220396-a36b-44d8-af92-465f5cc7d42f&_gl=1*1en3zvq*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODM1NDAuNy4wLjA."
                                
                                },
                                {
                                  countrySymbol:
                                  "https://firebasestorage.googleapis.com/v0/b/newreact-17866.appspot.com/o/image2%2FEllipse%20623%20(5).png?alt=media&token=af0cc9c9-ca5d-4d20-8ccc-6e28fb1695d2&_gl=1*va414i*_ga*MTE4MTQyMjA4NS4xNjk2MDM3Njg5*_ga_CW55HF8NVT*MTY5NjI3ODcxOC4yNC4xLjE2OTYyODUwODUuNTguMC4w"
                                  },
  ];
return(

<section className="trips">
  <div className="d-flex justify-content-center mt-3" style={{fontFamily:'Poppins, sans-serif', fontWeight: 700,fontSize: '18px',color: '#DF6951',lineHeight: '27px'}}>
    TRENDY
  </div>
  <div className="d-flex justify-content-center trending-tour" style={{fontFamily:'Volkhov, sans-serif', fontWeight: 700,fontSize: '50px',color: '#181E4B'}}>
    Our Trending Tour
  </div>
  <div className="d-flex justify-content-center trending-tour" style={{fontFamily:'Volkhov, sans-serif', fontWeight: 700,fontSize: '50px',color: '#181E4B'}}>
    Packages
  </div>

  <div className="container-lg ">
    <div className="row my-5  align-items-center justify-content-center">
    {props.products.map((product, index) => (
          <ProductCard key={index} product={product}  />
        ))}
        







  </div>
 


  </div>


</section>



);

};
export default Products;
