//library imports
import React from 'react'

const VegetableAndSpices = ({ vegetableAndSpices }) => {

    const { name, quantity } = vegetableAndSpices; 

  return (
    <div className="vegetable-and-spices display">
        
        <p>{name}</p>
        {
          quantity.includes("Kg") || quantity.includes("gm") || quantity.includes("litres") ? 
          (<p>{quantity}</p>) : 
          (<p>{quantity} Pc</p>)
        }
   
    </div>
  );
};

export default VegetableAndSpices;