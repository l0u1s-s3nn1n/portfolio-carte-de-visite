import React from "react";
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
    <div className="contact">
        <Navigation/>
       <div className="contactContent">
           <div className="header"></div>
           <div className="contactBox">
               <h1>Contactez-moi</h1>
               <ul>
                   <li>
                       <i className="fas fa-map-marker-alt"></i>
                       <a className="clickInput" href="https://goo.gl/maps/k7ddRUv2vDRETJH86" target="_blank" rel="noopener" rel="noreferrer"><span>Quimper</span></a>
                   </li>
                   <li>
                       <i className="far fa-envelope"></i>
                       <a className="clickInput" href="mailto:louislebail@pm.me" target="_blank" rel="noopener" rel="noreferrer"><span>Contactez-moi par mail !</span></a>
                   </li>
               </ul>
    
           
           
           </div>
       </div>
    </div>
    );
};

export default Contact;
