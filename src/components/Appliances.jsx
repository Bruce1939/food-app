//library imports
import React from 'react';

//assets
import ref from '../assets/ref.png'

const Appliances = ({ appliance }) => {
    
    const { name } = appliance;

  return (
    <div className="appliance">
        <img src={ref} alt=""/>
        <p>{name}</p>
    </div>
  );
};

export default Appliances;