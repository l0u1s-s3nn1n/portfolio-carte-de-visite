import React from 'react';

const Experience = () => {
  return (
      <div className='experience'>
        <h3>Expériences</h3>
        <div className='exp-1'>
          <h4>Formation Openclassrooms</h4>
          <h5>2021 - 2022</h5>
          <h6>
           Parcours développeur-intégrateur web (bac+2/niveau 5)
           </h6>
           <p>1.Transformer une maquette en site web (html/css)</p>
           <p>2.Dynamiser une page web avec des anmations en CSS.</p>
           <p>3.Optimiser un site web existant (SEO)</p>
           <p>4.Construire un site e-commerce (JS)</p>
           <p>5.Construire une API sécurisée (node/mongoDB/express.js)</p>
           <p>6.Construire un réseau social interne (react.js/php/node)</p>
        </div>
        <div className='exp-2'>
          <h4>Blockchain</h4>
          <h5>2020- 2022</h5>
          <p>- DeFi</p>
          <p>- NFT</p>
          <p> - dApp/NFT minting app</p>
        </div>
        <div className='exp-3'>
          <h4>Chef Cuisinier</h4>
          <h5>2013- 2021</h5>
          <p>Restaurant La Pépinière, Quimper</p>
          <p>Restaurant Le Sistrot, Quimper</p>
          <p>Restaurant Le Grimaldi, Locronan</p>
          
          
        </div>
        
      </div>
  );
};

export default Experience;