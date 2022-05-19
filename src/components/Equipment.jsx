//library imports
import React from 'react';

//assets
import refrigerator from '../assets/refrigerator.svg';

const Equipment = ({ equipment }) => {
  return (
    <div className="equipment">
        <img src={refrigerator} alt="Equipment" />
        <p>{equipment}</p>
    </div>
  );
};

export default Equipment;