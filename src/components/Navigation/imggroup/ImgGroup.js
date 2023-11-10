import React from "react";
import './ImgGroup.css';
import group from '../../New_folder/Group 81.webP';

function ImgGroup(){
return(
<section className="image_group">
      <div className="container text-light mt-3">
           <img src={group} alt="group" className="img-fluid" width="182" height="37"/>
           2,500 people booked Tommorowland Event in last 24 hours
      </div>
      </section>


);



};
export default ImgGroup;