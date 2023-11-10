import React from "react";
import Fly_Emirates from '../New_folder/image909.png';
import tivago from '../New_folder/image912(4).png';
import air_bnb from '../New_folder/Mask group.png';
import turkish_airlines from '../New_folder/Mask group (1).png';
import swiss from '../New_folder/image912(1).png';
import './Airlines.css';

function Airlines(){
    const airline={
        overflow: 'hidden'
    };
    return(
        <section className="airlines bg-light bd-highlight" style={airline}>
    <div className="d-flex justify-content-center">
       <div className="p-5">
        <img src={Fly_Emirates} alt="Fly Emirates" width="144" height="50"/>

       </div>
       <div className="p-5">
        <img src={tivago} alt="tivago" width="166" height="50"/>
       </div>

       <div className="p-5">
        <img src={air_bnb} alt="air bnb" width="161" height="50"/>

       </div>
       <div className="p-5">
        <img src={turkish_airlines} alt="turkish airlines" width="173" height="50"/>

       </div>
       <div className="p-5 text-right">
        <img src={swiss} alt="swiss" width="222" height="50"/>

       </div>


      



    </div>
  </section>
    );




};
export default Airlines;