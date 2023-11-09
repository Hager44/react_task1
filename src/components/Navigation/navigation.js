import React from "react";
import './Navigation.css';
import backgroundImage from '..//New_folder/Rectangle_19290.webP';

import Navigationbar from "./navigationbar/Navigationbar";
import Context from "./context/Context";
import Searchtool from "./searchtool/Searchtool";
import ImgGroup from "./imggroup/ImgGroup";
import Scroll from "./scroll/Scroll";


  function Navigation() {
    const backgroundStyle = {
      backgroundImage:`url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      overflow: 'hidden',
      maxWidth:'1920px',
    };
  
    
    
  
  
  
   
return (
<div style={backgroundStyle}>
 <Navigationbar/>
  <Context/>
  <Searchtool/>
  <ImgGroup/>
  <Scroll/>
   
    
    
     
      
   
    </div> 
    

);
};
export default Navigation;